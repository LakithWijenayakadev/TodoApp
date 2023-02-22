import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Image, Dimensions, Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import Fonts from "../styles/Fonts";
import Colors from "../styles/Colors";
import PencilIcon from "./../icons/pencil.png"
import DeleteIcon from "./../icons/delete.png"
import { Styles } from "../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import ViewTodoHeading from "../components/ViewTodoHeading";
import { SettodoListItems, SethaveTodos } from './../../redux/TodoListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Settopic, Setdescriptin, Setcolor, SetupdateId, Setdate, SetSelectedIndex, SetupdateItem } from './../../redux/CreateTodoSlice';
import { ActivityIndicator } from "react-native-paper";
const window = Dimensions.get('window');


function ViewTodo({ navigation }) {

    const TodoListItems = useSelector(state => state.TodoList.todoListItems)
    const dispatch = useDispatch()
    const TodoItem = useSelector(state => state.ViewTodo.todoData)
    const theme = useSelector(state => state.Theme.theme)

    const [Indicator, setIndicator] = useState(false);

    function updateItem() {

        dispatch(Settopic(TodoItem.Topic));
        dispatch(Setdescriptin(TodoItem.Description));
        dispatch(Setcolor(TodoItem.Color));
        dispatch(SetSelectedIndex(TodoItem.ColorIndex));
        dispatch(SetupdateItem(true));
        dispatch(SetupdateId(TodoItem.id))
        navigation.navigate("UpdateTodo");
    }



    function deleteItem() {
        Alert.alert('Delete..?', 'You cant undo this..', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => DeleteConfirm() },
        ], {
            cancelable: true,
        });
    }

    function DeleteConfirm() {
        setIndicator(true);
        const Array = TodoListItems.filter(item => item.id !== TodoItem.id);
        dispatch(SettodoListItems(Array));

        setTimeout(function () {
            navigation.navigate('TodoList');

            setTimeout(function () {
                setIndicator(false);
            }, 500);

        }, 500);
    }


    useEffect(() => {
        saveToLocale();
        console.log("leng", TodoListItems.length)
        if (TodoListItems.length == 0) {
            dispatch(SethaveTodos(false))
        }
    }, [TodoListItems]);


    const saveToLocale = async () => {
        try {
            await AsyncStorage.setItem('TodoList', JSON.stringify(TodoListItems));
        } catch (error) {
            console.log(error);
        }

    };



    if (Indicator == true) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: theme === 'light' ? Colors.light : Colors.black }}>
                <StatusBar backgroundColor={theme === 'light' ? Colors.light : Colors.black} barStyle={theme === 'light' ? "dark-content" : "light-content"} />


                <ActivityIndicator size={50} color={Colors.brown} />
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={[Styles.safeArea, { backgroundColor: theme == 'light' ? Colors.light : Colors.black }]}>
                <StatusBar backgroundColor={theme === 'light' ? Colors.light : Colors.black} barStyle={theme === 'light' ? "dark-content" : "light-content"} />
                {/* Todo Page Heading */}

                <ViewTodoHeading
                    Topic={TodoItem.Topic}
                    Color={TodoItem.Color} />

                <ScrollView fadingEdgeLength={50}>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ backgroundColor: Colors.notepad, minHeight: (window.height) * 0.6, marginHorizontal: 20, borderRadius: 15, padding: 10, borderWidth: 1.5, elevation: 10, borderColor: TodoItem.Color }}>
                            <Text style={{ fontSize: 15, fontFamily: Fonts.Bold, color: Colors.darkFont, textAlign: 'justify' }}>{TodoItem.Description}</Text>
                        </View>

                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 }}>
                        <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={() => updateItem()} style={Styles.pencilIcon}>
                                <Image source={PencilIcon} style={Styles.smallPencil}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteItem()} style={Styles.deletelIcon}>
                                <Image source={DeleteIcon} style={Styles.smallPencil}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default ViewTodo;