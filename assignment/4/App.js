import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Textinput,
    Stylesheet,
    Image,
    Platform
} from 'react-native';
import {TouchableOpacity as TO }from 'react-native-gesture -handler';

import {NavigationContainer,useIsFocussed} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./components/Home";
import MailScreen from "./components/Mail";
import Settings from "./components/Settings";

const Stack= createNativeStackNavigator();

 const Mail=()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" detachInactiveScreens>
             <Stack.Screen name ="Home" component={HomeScreen} options={{headerShown: false}}/>
             <Stack.Screen name ="Mail" component={MailScreen} options={{headerShown: false}}/>
             <Stack.Screen name ="Settings" component={Settings} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
 };
 export default Mail;
