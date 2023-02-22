import * as React from "react";
import { TouchableOpacity, ScrollView, Text, View, Image } from "react-native";
import { Styles } from "../styles/Styles";
import PencilIcon from "./../icons/pencil.png"
import Colors from "../styles/Colors";
import { useDispatch, useSelector } from "react-redux";



export default function NoTodoPage({ onPress }) {

    const theme = useSelector(state => state.Theme.theme)


    return (
        <View style={Styles.noTodoView}>

            <View style={Styles.mainView}>
                <TouchableOpacity onPress={onPress} style={Styles.firstTodoButton}>
                    <Image source={PencilIcon} style={Styles.pencilImage}></Image>
                </TouchableOpacity>

                <Text style={[Styles.firstTodoText, { color: theme == 'light' ? Colors.darkFont : Colors.light }]}>
                    Touch here to add your first note to manage{'\n'}
                    your daily life productively...
                </Text>

            </View>

        </View>

    )
}