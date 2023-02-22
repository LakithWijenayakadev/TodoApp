import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';
import Colors from './src/styles/Colors';
import SplashScreen from 'react-native-splash-screen'

// Screens
import TodoList from './src/screens/TodoList';
import ViewTodo from './src/screens/ViewTodo';
import CreateTodo from './src/screens/CreateTodo';
import UpdateTodo from './src/screens/UpdateTodo';

const Stack = createNativeStackNavigator();
console.disableYellowBox = true;

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (

    // Stack Navigator

    <NavigationContainer theme={DefaultTheme}>
      <StatusBar backgroundColor={Colors.light} barStyle="dark-content" />
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }} initialRouteName="TodoList" >

          <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="ViewTodo" component={ViewTodo} />
          <Stack.Screen name="CreateTodo" component={CreateTodo} />
          <Stack.Screen name="UpdateTodo" component={UpdateTodo} />

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );

}

export default App;