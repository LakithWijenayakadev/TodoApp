import * as React from "react";
import { TouchableOpacity, Dimensions, Text, View, Image } from "react-native";
import { Styles } from "../styles/Styles";
import Colors from "../styles/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";


export default function TodoItem({ Title, CreateDate, Description, SelectedColor, onPress, Marked, onPressMark }) {

    return (

        <TouchableOpacity onPress={onPress} style={[Styles.mainWrap, { backgroundColor: SelectedColor }]}>
            <View style={Styles.subWrap}>
                <Text numberOfLines={1} style={Styles.tileTopic}>{Title}</Text>
                <Text style={Styles.tileDate}>{CreateDate}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 0.85, justifyContent: 'center' }}>
                    <Text numberOfLines={1} style={Styles.tileDescription}>{Description}</Text>

                </View>
                <TouchableOpacity
                    onPress={onPressMark} style={{ flex: 0.15, alignItems: 'flex-end', paddingVertical: 3 }}>
                    <View style={{}}>
                        <MaterialCommunityIcons
                            name={Marked === true ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                            size={27}
                            color={Colors.light}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>


    )
}