import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

export default function App() {
	return (
		<View>
			<View style={{ backgroundColor: "1C0A00", borderRadius: 20 }}>
				<Text style={styles.paragraph}>All Contacts</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 20,
					backgroundColor: "#EFEFEF",
					borderRadius: 20,
				}}
			>
				<Image style={{ height: 50, width: 50 }} source={require("./assets/telemarketer.png")} />
				<View>
					<Text style={styles.text1}>choti</Text>
					<Text style={styles.text2}>7278289897</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 20,
					backgroundColor: "#F6F1E9",
					borderRadius: 20,
				}}
			>
				<Image
					style={{ height: 50, width: 50 }}
					source={require("./assets/call-center-agent.png")}
				/>
				<View>
					<Text style={styles.text1}>sanjana</Text>
					<Text style={styles.text2}>9656329857</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 20,
					backgroundColor: "#EFEFEF",
					borderRadius: 20,
				}}
			>
				<Image
					style={{ height: 50, width: 50 }}
					source={require("./assets/customer-support.png")}
				/>
				<View>
					<Text style={styles.text1}>Tiya</Text>
					<Text style={styles.text2}>728675327</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 20,
					backgroundColor: "#F6F1E9",
					borderRadius: 20,
				}}
			>
				<Image style={{ height: 50, width: 50 }} source={require("./assets/student.png")} />
				<View>
					<Text style={styles.text1}>Siya</Text>
					<Text style={styles.text2}>9674327842</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 20,
					backgroundColor: "#ECF2FF",
					borderRadius: 20,
				}}
			>
				<Image style={{ height: 50, width: 50 }} source={require("./assets/women.png")} />
				<View>
					<Text style={styles.text1}>Riya</Text>
					<Text style={styles.text2}>628767439</Text>
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
		backgroundColor: "2D2727",
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
