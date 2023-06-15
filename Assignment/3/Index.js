import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";

// You can import from local files
import AssetExample from "./components/AssetExample";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incdata = () => {
    setCount((c) => c + 1);
  };
  const decdata = () => {
    if (count > 0) {
      setCount((c) => c - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, textAlign: "center", marginBottom: 10 }}>
        CLICK COUNTER
      </Text>
      <View style={{ backgroundColor: "#F6FA70", borderRadius: 20 }}>
        <Text style={styles.text}>{count}</Text>
      </View>

      <View style={{ flexDirection: "row", marginHorizontal: "auto" }}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={incdata}>
            <Image source={require("./assets/plus.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={decdata}>
            <Image source={require("./assets/minus.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  text: {
    margin: 24,
    fontSize: 40,
    fontWeight: "bold",
    color: "#00DFA2",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#F6FA70",
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
});
