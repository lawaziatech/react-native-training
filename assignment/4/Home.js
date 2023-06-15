import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Item from "./component/Item";

const Home = ({ navigation }) => {
	const handleSetting = () => {
		console.log("Setting");
		navigation.navigate("Setting", { text: "I am setting page" });
	};

	const items = [
		{ id: 1, name: "Item 1", image: require("./assets/icon.png") },
		{ id: 2, name: "Item 2", image: require("./assets/icon.png") },
		{ id: 3, name: "Item 3", image: require("./assets/icon.png") },
		{ id: 4, name: "Item 4", image: require("./assets/icon.png") },
		{ id: 5, name: "Item 5", image: require("./assets/icon.png") },
	];

	return (
		<View>
			<View>
				<View style={{ flexDirection: "row-reverse" }}>
					<TouchableOpacity onPress={handleSetting}>
						<Text style={styles.setting}>Setting</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.main}>
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<Item text={item.name} image={item.image} navigation={navigation} />
					)}
					numColumns={2}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	main: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	setting: {
		backgroundColor: "skyblue",
		padding: 10,
		margin: 10,
		borderRadius: 25,
	},
});
