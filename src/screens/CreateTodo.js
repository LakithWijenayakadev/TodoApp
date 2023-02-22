import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Image, TextInput, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert } from "react-native";
import Colors from "../styles/Colors";
import DeleteIcon from "./../icons/delete.png"
import { Styles } from "../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import CreateTodoHeading from "../components/CreateTodoHeading";
import { Settopic, Setdescriptin, Setcolor, Setdate, SetSelectedIndex, SetupdateItem } from './../../redux/CreateTodoSlice';
import { SettodoListItems, SethaveTodos } from './../../redux/TodoListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from "moment/moment";
import { ActivityIndicator } from "react-native-paper";

const window = Dimensions.get('window');

function CreateTodo({ navigation }) {

    const TodoListItems = useSelector(state => state.TodoList.todoListItems)
    const SelectedIndex = useSelector(state => state.CreateTodo.selectedIndex)
    const topic = useSelector(state => state.CreateTodo.topic)
    const descriptin = useSelector(state => state.CreateTodo.descriptin)
    const ColorList = useSelector(state => state.CreateTodo.ColorList)
    const date = useSelector(state => state.CreateTodo.date)
    const theme = useSelector(state => state.Theme.theme)
    const [Indicator, setIndicator] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        var date = moment().utcOffset('+05:30')
            .format('ll')
        dispatch(Setdate(date));
        dispatch(Settopic(""));
        dispatch(Setdescriptin(""));

    }, []);


    function handleTopic(value) {
        dispatch(Settopic(value));
    }
    function handleDescription(value) {
        dispatch(Setdescriptin(value));
    }

    function handleColor(index) {
        dispatch(SetSelectedIndex(index))
        dispatch(Setcolor(ColorList[index].Color));
    }

    function SaveFunction() {

        if (topic == "") {
            Alert.alert(
                'Please type your topic.',
                'You can' + "'" + 't add Notes without a topic',
                [], {
                cancelable: true,
            },
            );
        } else if (descriptin == "") {
            Alert.alert(
                'Please type your description.',
                'You can' + "'" + 't add Notes without a description',
                [], {
                cancelable: true,
            },
            );
        } else {
            CreateTodo()
        }

    }

    function CreateTodo() {
        setIndicator(true);
        const newDataArray =
        {
            id: Math.random() * 10,
            Topic: topic,
            Description: descriptin,
            Date: date,
            Color: ColorList[SelectedIndex].Color,
            ColorIndex: SelectedIndex
        };

        dispatch(SettodoListItems([...TodoListItems, newDataArray]));
        dispatch(SethaveTodos(true));

        setTimeout(function () {
            dispatch(SetSelectedIndex(0))

            navigation.navigate("TodoList");

            setTimeout(function () {
                setIndicator(false);
            }, 500);

        }, 500);



    }

    useEffect(() => {
        saveToLocale();
    }, [TodoListItems]);

    const saveToLocale = async () => {
        try {
            await AsyncStorage.setItem('TodoList', JSON.stringify(TodoListItems));
        } catch (error) {
            console.log(error);
        }

    };


    const Color_Buttons = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                {ColorList.map((item, index) => (

                    <TouchableOpacity onPress={() => handleColor(index)} style={{ marginHorizontal: 5, borderRadius: 100, borderWidth: 3, borderColor: SelectedIndex == index ? Colors.orange : item.Color, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={
                            [Styles.selectColor,
                            {
                                backgroundColor: item.Color,
                            }
                            ]
                        }></View>
                    </TouchableOpacity>

                ))}
            </View>
        );
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


                <CreateTodoHeading
                    Topic={"Create new note."} />

                <ScrollView fadingEdgeLength={50}>

                    <View style={{ marginTop: 10 }}>

                        <View style={Styles.topicBackground}>
                            <TextInput
                                placeholder="Type your topic here..."
                                multiline
                                value={topic}
                                numberOfLines={2}
                                maxLength={50}
                                onChangeText={(value) => handleTopic(value)}
                                style={Styles.topicInput}>
                            </TextInput>
                        </View>


                        <View style={Styles.descriptionBackground}>
                            <TextInput
                                placeholder="Type your content here..."
                                multiline
                                value={descriptin}
                                scrollEnabled={false}
                                onChangeText={(value) => handleDescription(value)}
                                style={Styles.descriptionInput}></TextInput>
                        </View>

                    </View>

                    <View style={Styles.colorButtonListWrap}>

                        <Color_Buttons />

                    </View>

                    <View style={Styles.butonListWrap}>

                        <View style={Styles.wrapTwo}>

                            <TouchableOpacity
                                onPress={() => SaveFunction()}
                                style={Styles.saveButton}>
                                <Text style={Styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={Styles.wrapThree}>

                            <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.deletelIcon}>
                                <Image source={DeleteIcon} style={Styles.smallPencil}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default CreateTodo;