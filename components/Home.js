import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-web";

export default function HomeScreen({ navigation }) {
  const Mail = [
    {
      id: 1,
      image: require("../assets/I.png"),
      title: "Internshala",
      description1: "Jannat, new internships in Across The Globe (ATG)",
      description2: "lnGen Dynamics Inc. (Part Of AH Dynamics And Robotics)...",
      time: "8:13 PM",
    },
    {
      id: 2,
      image: require("../assets/L.png"),
      title: "LinkedIn Job Alerts",
      description1: "intern: 30+ opportunities ",
      description2: "Software Engineer and other roles are available",
      time: "8:13 PM",
    },
    {
      id: 3,
      image: require("../assets/L.png"),
      title: "LinkedIn Job Alerts",
      description1: "software engineer: 30+ opportunities",
      description2:
        "Project Support - Engineering Intern and other roles are available",
      time: "8:13 PM",
    },
    {
      id: 4,
      image: require("../assets/I.png"),
      title: "ISP Team from Inter.",
      description1:
        "FINAL Chance Jannat, you're a catch - here's your perfect match! ",
      description2: " Just 1 day left to grab an iPhone 13, Real...",
      time: "8:13 PM",
    },
    {
      id: 5,
      image: require("../assets/L.png"),
      title: "Lionsgate Play",
      description1: "An adventure of a lifetime awaits you Rs. 350",
      description2:
        "Go back in time @ off *IMC PREVIEW TEXTI* LionsGate Play B...",
      time: "8:13 PM",
    },
    {
      id: 6,
      image: require("../assets/C.png"),
      title: "Coursera",
      description1: "Closing soon: Computer Science degree from BITS Pilani",
      description2:
        "Prepare for in-demand tech roles with a degree in Comput...",
      time: "8:13 PM",
    },
    {
      id: 7,
      image: require("../assets/Z.png"),
      title: "Zomato",
      description1: "The last slice of Pizza",
      description2: "Last day to grab an iPhone 13, RealMe Smartphone & ot...",
      time: "8:13 PM",
    },
    {
      id: 8,
      image: require("../assets/C.png"),
      title: "Coinbase",
      description1: "Don't miss out on deals & vouchers worth",
      description2:
        "You are pre-approved for Paytm HDFC Bank Credit Card Avail No...",
      time: "8:13 PM",
    },
    {
      id: 9,
      image: require("../assets/P.png"),
      title: "Paytm Offers",
      description1: "Closing soon: Computer Science degree from BITS Pilani",
      description2:
        "Prepare for in-demand tech roles with a degree in Comput...",
      time: "8:13 PM",
    },
    {
      id: 10,
      image: require("../assets/F.png"),
      title: "Flipkart",
      description1: "Should belong to YOU! ",
      description2: "grab now We hope you enjoy emails from Flipkart.",
      time: "8:13 PM",
    },
    {
      id: 11,
      image: require("../assets/I.png"),
      title: "Internshala",
      description1:
        "Jannat, new internships in IIT Bombay, Blackcoffer & more",
      description2: " Internshala Hi Divyanshu, Here are some of the latest...",
      time: "8:13 PM",
    },
    {
      id: 12,
      image: require("../assets/L.png"),
      title: "LinkedIn Job Alerts",
      description1: "software engineer: 30+ opportunities ",
      description2: "Developer- Full Stack and other roles are available",
      time: "8:13 PM",
    },
    {
      id: 13,
      image: require("../assets/I.png"),
      title: "ISP Team from Inter.",
      description1: "Jannat, iPhone '13 reasons why",
      description2:
        "you should check this email!- ISP Program - India's #1 Student Partner",
      time: "8:13 PM",
    },
    {
      id: 14,
      image: require("../assets/K.png"),
      title: "Kotak",
      description1: "Get your Instant Account Number",
      description2:
        "If you are unable to view the below e-mailer, please click here Hi, Stay home, stay s...",
      time: "8:13 PM",
    },
    {
      id: 15,
      image: require("../assets/E.png"),
      title: "edx",
      description1: "Closing soon: Computer Science degree from BITS Pilani",
      description2:
        "Prepare for in-demand tech roles with a degree in Comput...",
      time: "8:13 PM",
    },
  ];

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.icon} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyMail", { item });
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text2}>
            {item.description1.length > 40
              ? item.description1.substring(0, 40) + "..."
              : item.description1}
          </Text>
          <Text style={styles.text3}>
            {item.description2.length > 40
              ? item.description2.substring(0, 38) + "..."
              : item.description2}
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.time}>{item.time}</Text>
      <Image source={require("../assets/star.png")} style={styles.star} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headingDesign}>
        <Image source={require("../assets/menu.png")} style={styles.icon1} />
        <TextInput style={styles.headingText} placeholder="Search in emails" />
        <Image source={require("../assets/profile.png")} style={styles.icon1} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text4}>Primary</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          style={{ marginHorizontal: 15 }}
        >
            <Image
              source={require("../assets/setting.png")}
              style={styles.setting}
            />
        </TouchableOpacity>
      </View>
      <FlatList
        data={Mail}
        renderItem={Item}
        keyExtractor={(item) => item.id.toString()}
      />
      <SafeAreaView style={styles.footer}>
        <Image source={require("../assets/email.png")} style={styles.logo} />
        <Image source={require("../assets/meet.png")} style={styles.logo} />
      </SafeAreaView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
  },
  icon: {
    width: 50,
    height: 45,
    marginRight: 10,
  },
  headingDesign: {
    margin: 20,
    backgroundColor: "#EFF4FA",
    borderRadius: 300,
    flexDirection: "row",
  },
  headingText: {
    margin: 8,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Google Sans",
    marginTop: 10,
    marginRight: 50,
  },
  item: {
    margin: 10,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "calibri",
  },
  text2: {
    fontSize: 12,
    fontWeight: "bold",
    //fontFamily: 'Google Sans',
  },
  text3: {
    fontSize: 13,
    fontFamily: "Google Sans",
  },
  text4: {
    marginLeft: 15,
    fontSize: 13,
    fontFamily: "Sans Serif",
  },
  footer: {
    margin: 10,
    backgroundColor: "#EFF4FA",
    borderRadius: 30,
    flexDirection: "row",
  },
  logo: {
    width: 30,
    height: 24,
    margin: 10,
    marginLeft: 60,
    marginRight: 50,
  },
  icon1: {
    margin: 5,
    width: 30,
    height: 30,
    //marginRight:10,
  },
  time: {
    fontSize: 10,
    fontWeight: "bold",
    position: "absolute",
    top: 0,
    right: 0,
  },
  star: {
    width: 18,
    height: 18,
    position: "absolute",
    bottom: 1,
    right: 0,
  },
  setting: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 1,
    right: 0,
  },
});