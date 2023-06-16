import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Assignment1 = () => {
	return (
		<View>
			<View style={styles.box1}></View>
			<View style={styles.box2}></View>
			<View style={styles.box3}></View>
		</View>
	);
};

export default Assignment1;

const styles = StyleSheet.create({
	box1: {
		backgroundColor: "#EA906C",
		height: 100,
		borderWidth: 1,
		marginBottom: 10,
	},
	box2: {
		backgroundColor: "#DD58D6",
		height: 100,
		marginBottom: 10,
	},
	box3: {
		backgroundColor: "#4942E4",
		height: 100,
		marginBottom: 10,
	},
});
