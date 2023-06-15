import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Setting = (props) => {
	return (
		<View>
			<Text>Setting</Text>
			<Text>{props.route.params.text}</Text>
		</View>
	);
};

export default Setting;

const styles = StyleSheet.create({});
