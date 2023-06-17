import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ItemDetails from "./ItemDetails";
const Details = (props) => {
  // const handlePress = () => {
  // 	props.navigation.navigate("ItemDetails");
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
