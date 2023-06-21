import { View, Text, Image } from "react-native";
import React from "react";

const MyBox = (props) => {
	return (
		<View style={{ flexDirection: "row", padding: 10 }}>
			<Image
				source={require("../assets/user.png")}
				style={{ width: 50, height: 50, marginRight: 10 }}
			/>
			<Text>{props.text}</Text>
		</View>
	);
};

export default MyBox;
