import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/email.png")} />
      <Image source={require("../assets/meet.png")} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    borderRadius: 10,
    margin: 3,
    backgroundColor: "#E3F4F4",
  },
});
