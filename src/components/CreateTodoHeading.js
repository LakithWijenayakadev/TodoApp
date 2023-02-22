import * as React from "react";
import { TouchableOpacity, Text, View, Image, Dimensions } from "react-native";
import { Styles } from "../styles/Styles";
import Logo from "./../logo/logo.png"
import PencilIcon from "./../icons/pencil.png"
import { useDispatch, useSelector } from "react-redux";
import Colors from "../styles/Colors";

const window = Dimensions.get('window');



export default function CreateTodoHeading({ Topic }) {

    const theme = useSelector(state => state.Theme.theme)

    return (
        <View style={Styles.headingMain}>
            <View style={Styles.headingSubWrap}>
                <View style={Styles.pencilIcon}>
                    <Image source={PencilIcon} style={Styles.smallPencil}></Image>
                </View>
                <View style={{ width: (window.width) * 0.75, }}>
                    <Text numberOfLines={2} style={[Styles.openTodoTopic, { color: theme == 'light' ? Colors.darkFont : Colors.light }]}>{Topic}</Text>
                </View>
            </View>
        </View>

    )
}