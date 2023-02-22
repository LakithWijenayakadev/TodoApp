import * as React from "react";
import { TouchableOpacity, Text, View, Image, Dimensions } from "react-native";
import { Styles } from "../styles/Styles";
import Logo from "./../logo/logo.png"
import PencilIcon from "./../icons/pencil.png"
import Colors from "../styles/Colors";
import { useDispatch, useSelector } from "react-redux";

const window = Dimensions.get('window');



export default function ViewTodoHeading({ Topic, Color }) {

    const theme = useSelector(state => state.Theme.theme)

    console.log(Topic.length)
    return (
        <View style={Styles.headingMain}>
            <View style={Styles.headingSubWrap}>
                <View style={[Styles.pencilIcon, { backgroundColor: Color }]}>
                    <Image source={PencilIcon} style={Styles.smallPencil}></Image>
                </View>
                <View style={{ width: (window.width) * 0.75, }}>
                    <Text numberOfLines={2} style={[Styles.openTodoTopic, { fontSize: Topic.length < 19 ? 30 : 26, color: theme == 'light' ? Colors.darkFont : Colors.light }]}>{Topic}</Text>
                </View>
            </View>
        </View>

    )
}