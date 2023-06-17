import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Phonebook from "./Assignment/1/Index";
// import Gmail from "./Assignment/2/Index";
// import Counter from "./Assignment/3/Index";
import Gmail from "./Assignment/4/Home";
import Mail from "./Assignment/4/Mail";
import Setting from "./Assignment/4/Setting";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Phonebook />
    // <Gmail />
    // <Counter />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Gmail} />
        <Stack.Screen name="Mail" component={Mail} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
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
