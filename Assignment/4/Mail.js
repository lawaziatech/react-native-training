import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Footer from "./components/Footer";

const Mail = (props) => {
  const { Logo, sender, heading, massage } = props.route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>
          [{sender}]{heading}
        </Text>
      </View>
      <View style={styles.secondview}>
        <View style={styles.circle}>
          <Text style={{ textAlign: "center", fontSize: 30 }}>{Logo}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.sender}>{sender}</Text>
        </View>
        <Image source={require("./assets/reply.png")} />
        <Image source={require("./assets/dot.png")} />
      </View>

      <View style={styles.msgcontianer}>
        <Text style={{ fontSize: 16 }}>{massage}</Text>
      </View>
      <View style={styles.btn}>
        <View style={styles.btnItem}>
          <Text>reply</Text>
          <Image source={require("./assets/reply.png")} />
        </View>

        <View style={styles.btnItem}>
          <Text>reply all</Text>
          <Image source={require("./assets/replyall.png")} />
        </View>

        <View style={styles.btnItem}>
          <Text>forward</Text>
          <Image source={require("./assets/arrow.png")} />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Mail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  heading: { fontSize: 25 },

  secondview: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },

  circle: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#5C469C",
  },
  sender: { fontSize: 24, paddingLeft: 15, marginRight: 60 },
  msgcontianer: { marginTop: 15 },
  btn: { flexDirection: "row", padding: 20, gap: 10, justifyContent: "center" },
  btnItem: {
    backgroundColor: "#DDE6ED",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
});
