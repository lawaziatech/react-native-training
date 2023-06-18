import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ItemDetails = (props) => {
  const item = props.route.params.item;
  const description1 = item ? item.description1 : "";
  const description2 = item ? item.description2 : "";
  const time = item ? item.time : "";
  const title = item ? item.title : "";

  return (
    <View style={{ margin: 10 }}>
      <View style={styles.headingDesign}>
        <Text style={styles.headingText}>{description1}</Text>
        <Image source={require("../assets/star.png")} style={styles.star} />
      </View>
      <View style={{ flexDirection: "row", marginLeft: 20 }}>
        <Image
          source={props?.route?.params?.item?.image}
          style={styles.authorImage}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.author}>{title}</Text>
          <Text style={{ fontSize: 10 }}>to me</Text>
        </View>
        <Text style={styles.time}>{props?.route?.params?.item?.time}</Text>
        <View style={{ flexDirection: "row-reverse" }}>
          <Image
            source={require("../assets/dots.png")}
            style={{ width: 18, height: 18, marginLeft: 25 }}
          />
          <Image
            source={require("../assets/reply.png")}
            style={{ width: 18, height: 18, marginLeft: 25 }}
          />
        </View>
      </View>
      <View style={styles.desContainer}>
        <Text style={styles.description}>{description2}</Text>
        <Text style={styles.description}>{description2}</Text>
        <Text style={styles.description}>{description2}</Text>
        <Text style={styles.description}>{description2}</Text>
        <Text style={styles.description}>{description2}</Text>
      </View>

      <View style={styles.footer}>
        <Image source={require("../assets/reply.png")} style={styles.logo} />
        <Image source={require("../assets/forward.png")} style={styles.logo} />
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  headingDesign: {
    margin: 10,
    alignSelf: "center",
    paddingBottom: 20,
  },
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
  topContainer: {
    flexDirection: "row-reverse",
    margin: 10,
  },
  author: {
    fontFamily: "Google sans",
    fontWeight: "600",
    fontSize: 17,
    marginRight: 5,
  },
  authorImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  time: {
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 8,
  },
  star: {
    width: 18,
    height: 18,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  description: {
    fontSize: 16,
    fontFamily: "Arial",
    alignSelf: "center",
  },
  desContainer: {
    justifyContent: "center",
    borderRadius: 15,
    margin: 24,
  },
  footer: {
    margin: 10,
    backgroundColor: "#EFF4FA",
    borderRadius: 30,
    flexDirection: "row",
    bottom: 0,
  },
  logo: {
    width: 30,
    height: 24,
    margin: 10,
    marginLeft: 60,
    marginRight: 50,
  },
});
