import * as React from "react";
import { TouchableOpacity, ScrollView, Text, View, Image } from "react-native";
import { Styles } from "../styles/Styles";
import PencilIcon from "./../icons/pencil.png"



export default function NoTodoPage({ onPress }) {
    return (
        <ScrollView style={Styles.noTodoView}>

            <View style={Styles.mainView}>
                <TouchableOpacity onPress={onPress} style={Styles.firstTodoButton}>
                    <Image source={PencilIcon} style={Styles.pencilImage}></Image>
                </TouchableOpacity>

                <Text style={Styles.firstTodoText}>
                    Touch here to add your first note to manage{'\n'}
                    your daily life productively...
                </Text>

            </View>

        </ScrollView>

    )
}