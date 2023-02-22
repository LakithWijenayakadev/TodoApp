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
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 12,
        bottom: 0,
        backgroundColor: "#525E75"
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
        color: Colors.darkFont,
        marginBottom: 100
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
        flex: 0.75
    },
    tileDate: {
        fontFamily: Fonts.Bold,
        fontSize: 11,
        color: Colors.light,
        flex: 0.25,
        textAlign: 'right'
    },
    tileDescription: {
        color: Colors.light,
        fontFamily: Fonts.Regular,
        fontSize: 15,
        marginBottom: 5,
        marginHorizontal: 8
    },
    openTodoTopic: {
        marginHorizontal: 10,
        fontSize: 26,
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
        paddingHorizontal: 20,
    },
    TodoListheadingMain: {
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: (window.height) * 0.05
    },
    headingSubWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    themeIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        height: 55, width: 55,
    },

    // CreateTodo

    selectColor: {
        height: (window.width) * 0.065,
        width: (window.width) * 0.065,
        borderRadius: 100,
    },
    colorButtons: {
        marginHorizontal: 5,
        borderRadius: 100,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topicInput: {
        textAlign: "justify",
        backgroundColor: "transparent",
        fontSize: (window.width) * 0.053,
        fontFamily: Fonts.Bold,
        color: Colors.darkFont,
        textAlign: 'justify'
    },
    descriptionInput: {
        fontSize: (window.width) * 0.05,
        fontFamily: Fonts.Bold,
        color: Colors.darkFont,
        textAlign: 'justify',
        minHeight: (window.height) * 0.47,
        textAlignVertical: 'top'
    },
    topicBackground: {
        backgroundColor: Colors.notepad,
        elevation: 5,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 25,
        marginTop: (window.height) * 0.03
    },
    descriptionBackground: {
        backgroundColor: Colors.notepad,
        elevation: 5,
        minHeight: (window.height) * 0.47,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginTop: (window.height) * 0.02
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
    },

    // View Todo

    descriptionText: {
        fontSize: 15,
        fontFamily: Fonts.Bold,
        color: Colors.darkFont,
        textAlign: 'justify'
    },
    descriptionWrap: {
        backgroundColor: Colors.notepad,
        minHeight: (window.height) * 0.6,
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 10,
        borderWidth: 1.5,
        elevation: 10,
    },
});