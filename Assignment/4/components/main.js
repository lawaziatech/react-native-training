import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetails from "./ItemDetails";
const Details = ({navigation}) => {
  navigation.navigate('My Mail');
};


export default Details;

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 150,
    backgroundColor: "red",
    margin: 10,
    padding: 10,
  },
});
