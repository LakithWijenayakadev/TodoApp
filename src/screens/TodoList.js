import React, { useState, useEffect, useRef } from 'react';
import Logo from "./../logo/logo.png"
import { SafeAreaView, ScrollView, Image, Dimensions, StatusBar, ActivityIndicator, StyleSheet, Animated, Text, TouchableOpacity, View, FlatList } from "react-native";
import Fonts from "../styles/Fonts";
import Colors from "../styles/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import PencilIcon from "./../icons/pencil.png"
import { Styles } from "../styles/Styles";
import TodoHeading from "../components/TodoHeading";
import NoTodoPage from "../components/NoTodoPage";
import TodoItem from "../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SettodoListItems, SethaveTodos } from './../../redux/TodoListSlice';
import { SetTodoData } from './../../redux/ViewTodoSlice';
import { SetSelectedIndex } from './../../redux/CreateTodoSlice';
import { Settheme } from './../../redux/ThemeSlice';


const window = Dimensions.get('window');


function TodoList({ navigation }) {


    const TodoListItems = useSelector(state => state.TodoList.todoListItems)
    const haveTodos = useSelector(state => state.TodoList.haveTodos)
    const theme = useSelector(state => state.Theme.theme)
    const [Indicator, setIndicator] = useState(true);
    console.log("the", theme);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.getItem('TodoList').then(value => {
            if ((value == null) || (value.length == 2)) {
                dispatch(SethaveTodos(false))
                console.log("first time", value);
            } else {
                AsyncStorage.setItem('TodoList', value);
                dispatch(SethaveTodos(true))
                dispatch(SettodoListItems(JSON.parse(value)));
                console.log("iteems list", value.length);
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
        console.log("data", index);
        dispatch(SetTodoData(index));
        navigation.navigate("ViewTodo")
    }

    function CreateTodo() {
        dispatch(SetSelectedIndex(0))
        navigation.navigate("CreateTodo");
    }

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    function ThemeSwitch() {
        console.log("ggg");
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
                    <View style={{ marginTop: 40, flex: 1, }}>
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
                    style={styles.fab}
                    small
                    icon="plus"
                    color={Colors.light}

                    onPress={() => CreateTodo()}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 12,
        bottom: 0,
        backgroundColor: "#525E75"
    },
})

export default TodoList;