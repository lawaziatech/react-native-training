import React from 'react';


import {NavigationContainer,useIsFocussed} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from "./components/Home";
import MailScreen from "./components/Mail";
import settingScreen from "./components/Settings";

const Stack= createNativeStackNavigator();

 const Mail=()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" detachInactiveScreens>
             <Stack.Screen name ="Home" component={HomeScreen} options={{headerShown: false}}/>
             <Stack.Screen name ="Mail" component={MailScreen} options={{headerShown: false}}/>
             <Stack.Screen name ="Settings" component={settingScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
 };
 export default Mail;
