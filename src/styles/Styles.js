import { StyleSheet, Dimensions } from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

const window = Dimensions.get('window');

export const Styles = StyleSheet.create({

    // TodoList

    safeArea: {
        paddingTop: 20,
        paddingHorizontal: 5,
        flex: 1,
        backgroundColor: Colors.light
    },
    logo: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    appName: {
        marginHorizontal: 10,
        fontSize: 50,
        color: Colors.darkFont,
        fontFamily: Fonts.Bold
    },
    subTopic: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: Fonts.Medium,
        Colors: Colors.darkFont
    },
    noTodoView: {
        position: 'absolute',
        height: (window.height) * 1,
        width: (window.width) * 1
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: (window.height) * 1,
    },
    firstTodoButton: {
        width: 100,
        height: 100,
        backgroundColor: Colors.lightGreen,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    pencilImage: {
        height: 40,
        width: 40
    },
    firstTodoText: {
        textAlign: 'center',
        fontFamily: Fonts.Bold,
        color: Colors.darkFont
    },

    // Todo Items List

    mainWrap: {
        height: 83,
        width: (window.width) * 0.9,
        backgroundColor: Colors.lightGreen,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: 15
    },
    subWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 2
    },
    tileTopic: {
        fontFamily: Fonts.Bold,
        color: Colors.light,
        fontSize: 26,
    },
    tileDate: {
        fontFamily: Fonts.Bold,
        fontSize: 11,
        color: Colors.light,
    },
    tileDescription: {
        color: Colors.light,
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginBottom: 5,
        marginHorizontal: 8
    },
    openTodoTopic: {
        marginHorizontal: 10,
        fontSize: 24,
        color: Colors.darkFont,
        fontFamily: Fonts.Bold,
    },
    pencilIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.lightGreen,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    deletelIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.red,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        elevation: 3
    },
    saveButton: {
        width: 135,
        height: 50,
        backgroundColor: Colors.lightGreen,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        elevation: 3
    },
    smallPencil: {
        height: 25,
        width: 25
    },
    delete: {
        height: 20,
        width: 20
    },

    // TodoHeading

    headingMain: {
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    headingSubWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    // CreateTodo

    selectColor: {
        height: (window.width) * 0.065,
        width: (window.width) * 0.065,
        borderRadius: 100,
    },
    topicInput: {
        textAlign: "justify",
        backgroundColor: "transparent",
        fontSize: (window.width) * 0.055,
        fontFamily: Fonts.Bold,
        color: Colors.darkFont,
        textAlign: 'justify'
    },
    descriptionInput: {
        textAlign: "justify",
        fontSize: (window.width) * 0.05,
        fontFamily: Fonts.Bold,
        color: Colors.darkFont,
        textAlign: 'justify',
        maxHeight: (window.height) * 0.59,
    },
    topicBackground: {
        backgroundColor: Colors.notepad,
        elevation: 5,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 25
    },
    descriptionBackground: {
        backgroundColor: Colors.notepad,
        elevation: 5,
        minHeight: (window.height) * 0.59,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 10
    },
    colorButtonListWrap: {
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    butonListWrap: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    saveButtonText: {
        fontFamily: Fonts.Bold,
        fontSize: 20,
        color: Colors.light
    },
    wrapOne: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    wrapTwo: {
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    wrapThree: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});