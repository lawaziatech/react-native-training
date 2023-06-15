import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Phonebook from "./Assignment/1/Index";
import Gmail from "./Assignment/2/Index";
import Counter from "./Assignment/3/Index";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Phonebook />
    // <Gmail />
    <Counter />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
