import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Phonebook from "./assignment/1/Index";
import Gmail from "./assignment/2/Index";

export default function App() {
	return (
		// <View style={styles.container}>
		//   <Text>Open up App.js to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
		// <Phonebook />
		<Gmail />
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
