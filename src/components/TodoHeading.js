import React from "react";
import { TouchableOpacity, Text, View, Image, Animated, Dimensions } from "react-native";
import { Styles } from "../styles/Styles";
import Logo from "./../logo/logo.png"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import Colors from "../styles/Colors";

const window = Dimensions.get('window');

export default function TodoHeading({ onPress, opacity }) {

    const theme = useSelector(state => state.Theme.theme)

    return (
        <View style={Styles.TodoListheadingMain}>
            <View style={Styles.headingSubWrap}>
                <Image source={Logo} style={Styles.logo}></Image>
                <Text style={[Styles.appName, { color: theme == 'light' ? Colors.darkFont : Colors.light }]}>Todo..!</Text>
                <View style={{ height: 20, width: 20, marginLeft: (window.width) * 0.18 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onPress}
                        style={Styles.themeIcon}
                    >
                        <Animated.View
                            style={[
                                {
                                    // Bind opacity to animated value
                                    opacity: opacity,
                                }
                            ]}
                        >
                            <MaterialCommunityIcons
                                name={theme == 'light' ? 'white-balance-sunny' : 'moon-waxing-crescent'}
                                size={35}
                                color={theme == 'light' ? Colors.darkFont : Colors.light}
                            />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={[Styles.subTopic, { color: theme == 'light' ? Colors.darkFont : Colors.light }]}>Manage your daily busy life{'\n'}without any hassle.</Text>
            </View>


        </View>

    )
}