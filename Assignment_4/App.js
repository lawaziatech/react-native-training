import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { TouchableOpacity as TO } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MailScreen from './Mail'
import HomeScreen from './Home'
import settingScreen from './Settings'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function navStack(){
return (
      
      <Stack.Navigator initialRouteName="Home" detachInactiveScreens>
       <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
       <Stack.Screen name="MailBox" component={MailScreen} options={{headerShown: false}}/>
      </Stack.Navigator>  
)
}


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
      <Drawer.Screen name="Home" component={navStack} options={{headerShown: false}} />
      <Drawer.Screen name="Settings" component={settingScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
