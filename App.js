import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MyBox from "./components/MyBox";
import Container from "./components/Container";

export default function App() {
	return (
		<View style={{ paddingTop: 60 }}>
			<MyBox text="Ashish Burnwal" />
			<MyBox text="Kaushal Kumar" />
			<MyBox text="Priya Kumari" />
			<MyBox text="Nikita Kumari" />
			<MyBox text="Ajit Kumar" />
			<Container bgColor="#fab1a0" />
			<Container bgColor="#81ecec" />
			<Container bgColor="#b2bec3" />
			<Container bgColor="#00cec9" />
			<Container bgColor="#6c5ce7" />
		</View>
	);
}

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
