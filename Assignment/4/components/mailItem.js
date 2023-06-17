import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const MailItem = (props) => {
  const handlePress = () => {
    props.navigation.navigate("Mail", {
      Logo: props.logo,
      sender: props.name,
      heading: props.heading,
      massage: props.msg,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.box}>
          <Text style={{ fontSize: 28 }}>{props.logo}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.mailtext}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.heading}>{props.name}</Text>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.msg}>{props.msg.substr(0, 40)}</Text>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ marginRight: 5 }}>{props.time}</Text>
          <Image
            source={require("../assets/star.png")}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </View>
  );
};

export default MailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    borderRadius: 20,
    margin: 3,
    backgroundColor: "#F9F9F9",
  },
  box: {
    backgroundColor: "blue",
    width: 35,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 35,
  },
  mailtext: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 6,
  },
  msg: {
    fontSize: 12,
    paddingLeft: 6,
  },
});
