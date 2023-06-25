import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import MailScreen from '../screens/Mail';
import SettingScreen from '../screens/Settings';
import InsideSettingsScreen from '../screens/InsideSettings';

const Stack = createStackNavigator();

const Route =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gmail" detachInactiveScreens>
        <Stack.Screen
          name="Gmail"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MailBox"
          component={MailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InsideSettings"
          component={InsideSettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
