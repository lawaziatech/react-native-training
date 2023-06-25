// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Home";
import ItemDetails from "./components/ItemDetails";
import Setting from "./components/Settings";

const Stack = createNativeStackNavigator();

function Mail() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyMail" component={ItemDetails} />
        <Stack.Screen name="Settings" component={Setting} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Mail;