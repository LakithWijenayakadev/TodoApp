import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Dimensions, StatusBar, ActivityIndicator, Animated, View, FlatList } from "react-native";
import { Styles } from "../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { FAB } from 'react-native-paper';
import { SettodoListItems, SethaveTodos } from './../../redux/TodoListSlice';
import { SetTodoData } from './../../redux/ViewTodoSlice';
import { SetSelectedIndex } from './../../redux/CreateTodoSlice';
import { Settheme } from './../../redux/ThemeSlice';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import TodoHeading from "../components/TodoHeading";
import NoTodoPage from "../components/NoTodoPage";
import TodoItem from "../components/TodoItem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from "../styles/Colors";

const window = Dimensions.get('window');


function TodoList({ navigation }) {

    const TodoListItems = useSelector(state => state.TodoList.todoListItems)
    const haveTodos = useSelector(state => state.TodoList.haveTodos)
    const theme = useSelector(state => state.Theme.theme)
    const [Indicator, setIndicator] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const dispatch = useDispatch()
    changeNavigationBarColor(theme == 'light' ? Colors.lightBrown : Colors.black, false);


    useEffect(() => {
        AsyncStorage.getItem('TodoList').then(value => {
            if ((value == null) || (value.length == 2)) {
                dispatch(SethaveTodos(false))

            } else {
                AsyncStorage.setItem('TodoList', value);
                dispatch(SethaveTodos(true))
                dispatch(SettodoListItems(JSON.parse(value)));
            }
        });

        Theme();

    }, []);

    function Theme() {
        AsyncStorage.getItem('AppTheme').then(value => {
            if (value == null) {
                dispatch(Settheme('light'));
                AsyncStorage.setItem('AppTheme', 'light');
                setTimeout(function () {
                    setIndicator(false);
                }, 200);
            } else {
                AsyncStorage.setItem('AppTheme', value);

                dispatch(Settheme(value));
                setTimeout(function () {
                    setIndicator(false);
                }, 200);
            }
        });
    }

    function viewTodo(index) {

        dispatch(SetTodoData(index));
        navigation.navigate("ViewTodo")
    }

    function CreateTodo() {
        dispatch(SetSelectedIndex(0))
        navigation.navigate("CreateTodo");
    }

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 1 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 0.5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    function ThemeSwitch() {

        if (theme === 'light') {
            fadeOut();

            AsyncStorage.setItem('AppTheme', 'dark');
            setTimeout(function () {
                fadeIn();
                dispatch(Settheme('dark'));
            }, 500);
        } else {
            fadeOut();

            AsyncStorage.setItem('AppTheme', 'light');
            setTimeout(function () {
                fadeIn();
                dispatch(Settheme('light'));
            }, 500);
        }
    }
    if (Indicator == true) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: theme === 'light' ? Colors.light : Colors.black }}>
                <StatusBar backgroundColor={theme === 'light' ? Colors.light : Colors.black} barStyle={theme === 'light' ? "dark-content" : "light-content"} />
                <ActivityIndicator size={50} color={Colors.brown} />
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={[Styles.safeArea, { backgroundColor: theme === 'light' ? Colors.light : Colors.black }]}>
                <StatusBar backgroundColor={theme === 'light' ? Colors.light : Colors.black} barStyle={theme === 'light' ? "dark-content" : "light-content"} />

                {/* Todo Page Heading */}

                <TodoHeading
                    onPress={() => ThemeSwitch()}
                    opacity={fadeAnim} />

                {/* When don't have todo's */}
                {haveTodos == false &&
                    <NoTodoPage
                        onPress={() => CreateTodo()} />
                }

                {haveTodos == true &&
                    <View style={{ marginTop: (window.height) * 0.05, flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={TodoListItems}
                            fadingEdgeLength={30}
                            renderItem={({ item, index }) => <TodoItem
                                Title={item.Topic}
                                CreateDate={item.Date}
                                Description={item.Description}
                                SelectedColor={item.Color}
                                onPress={() => viewTodo(TodoListItems[index])}
                            />
                            }
                        />

                    </View>
                }
                <FAB
                    style={Styles.fab}
                    small
                    icon="plus"
                    color={Colors.light}
                    onPress={() => CreateTodo()}
                />
            </SafeAreaView>
        );
    }
}

export default TodoList;