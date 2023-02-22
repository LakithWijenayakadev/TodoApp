import * as React from "react";
import { TouchableOpacity, Dimensions,  Text, View, Image } from "react-native";
import { Styles } from "../styles/Styles";


export default function TodoItem({ Title, CreateDate, Description, SelectedColor, onPress }) {
    return (

        <TouchableOpacity onPress={onPress} style={[Styles.mainWrap, { backgroundColor: SelectedColor }]}>
            <View style={Styles.subWrap}>
                <Text numberOfLines={1} style={Styles.tileTopic}>{Title}</Text>
                <Text style={Styles.tileDate}>{CreateDate}</Text>
            </View>
            <View>
                <Text numberOfLines={1} style={Styles.tileDescription}>{Description}</Text>
            </View>
        </TouchableOpacity>


    )
}