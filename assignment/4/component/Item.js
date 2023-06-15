import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Item = (props) => {
	const handlePress = () => {
		props.navigation.navigate("ItemDetail");
	};
	return (
		<TouchableOpacity onPress={handlePress} style={styles.container}>
			<Image style={{ width: 80, height: 80 }} source={require("../assets/icon.png")} />
			<Text>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default Item;

const styles = StyleSheet.create({
	container: {
		width: "40%",
		height: 150,
		backgroundColor: "red",
		margin: 10,
		padding: 10,
	},
});
