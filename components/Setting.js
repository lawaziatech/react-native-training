import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Setting = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.setText}>General Settings</Text>
			<Text style={styles.setText}>Privacy & Security</Text>
			<Text style={styles.setText}>Account Settings</Text>
			<Text style={styles.setText}>Manage your Accounts</Text>
			<Text style={styles.setText}>abc123@gmail.com</Text>
			<Text style={styles.setText}>pqr456@gmail.com</Text>
			<Text style={styles.setText}>zsdsf2342@gmail.com</Text>
			<Text style={styles.setText}>asdf787@gmail.com</Text>
			<Text style={styles.setText}>Add Accounts</Text>


		</View>
	);
};

export default Setting;

const styles = StyleSheet.create({
	container:{
		justifyContent:'space-around',
		flex:1,
		margin:30,
	},
	setText:{
		fontSize:18,
		fontWeight:'bold',
		padding:20

	}
});