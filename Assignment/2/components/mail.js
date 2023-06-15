import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

const Mail = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={{ fontSize: 25 }}>{props.logo}</Text>
			</View>

			<View style={styles.mailtext}>
				<View style={{ flexDirection: "column" }}>
					<Text style={styles.heading}>{props.name}</Text>
					<Text style={styles.heading}>{props.heading}</Text>
					<Text style={styles.msg}>{props.msg}</Text>
				</View>
			</View>

			<View>
				<View style={{ flexDirection: "column", alignItems: "center" }}>
					<Text style={{ marginRight: 5 }}>{props.time}</Text>
					<Image source={require("../assets/star.png")} style={{ marginTop: 5 }} />
				</View>
			</View>
		</View>
	);
};

export default Mail;

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
		width: 30,
		height: 30,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		// borderRadius: "100%",
	},
	mailtext: {
		flex: 1,
	},
	heading: {
		fontSize: 14,
		fontWeight: "bold",
		paddingLeft: 6,
	},
	msg: {
		fontSize: 12,
		paddingLeft: 6,
	},
});
