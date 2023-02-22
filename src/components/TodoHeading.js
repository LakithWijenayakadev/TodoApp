import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image, Switch, Animated } from "react-native";
import { Styles } from "../styles/Styles";
import Logo from "./../logo/logo.png"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useDispatch, useSelector } from "react-redux";
import Colors from "../styles/Colors";




export default function TodoHeading({ ProPicSource, onPress, opacity }) {



    const theme = useSelector(state => state.Theme.theme)


    return (
        <View style={Styles.headingMain}>
            <View style={Styles.headingSubWrap}>
                <Image source={Logo} style={Styles.logo}></Image>
                <Text style={[Styles.appName, { color: theme == 'light' ? Colors.darkFont : Colors.light }]}>Todo..!</Text>
                <View style={{ height: 20, width: 20, marginLeft: 50 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onPress}
                        style={{


                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 20,
                            height: 50, width: 50
                        }}
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
                                size={30}
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