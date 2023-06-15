import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import As1 from "./assignment/1";
import As4 from "./Assignment/4";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Assignment/4/Home";
import About from "./Assignment/4/About";
import Setting from "./Assignment/4/Setting";
import ItemDetails from "./Assignment/4/ItemDetails";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="Setting" component={Setting} />
				<Stack.Screen name="ItemDetail" component={ItemDetails} />
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
