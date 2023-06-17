import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>General Setting</Text>
      <Text style={styles.text}>anujmehta3578@gmail.com</Text>
      <Text style={styles.text}>abcxyz.hhc.com</Text>
      <Text style={styles.text}>pqrstp@homail.com</Text>
      <Text style={styles.text}>Add account</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, paddingLeft: 20 },
  text: { marginBottom: 10, fontSize: 16, color: "#526D82" },
});
