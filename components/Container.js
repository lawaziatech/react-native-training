import React from "react";
import { View, Text } from "react-native";

const Container = (props) => {
	return (
		<View style={{ backgroundColor: props.bgColor, height: 90, width: 90, margin: 10 }}></View>
	);
};

export default Container;
