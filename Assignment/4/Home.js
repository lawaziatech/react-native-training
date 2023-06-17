import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import MailItem from "./components/mailItem";
import Footer from "./components/Footer";
import { StatusBar } from "expo-status-bar";
// You can import from local files

export default function Gmail({ navigation }) {
  const handleClick = () => {
    navigation.navigate("Setting");
  };
  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <Image source={require("./assets/menu.png")} />
        <Text style={{ flex: 1, paddingLeft: 10, fontSize: 20 }}>
          Search in Emails
        </Text>
        <TouchableOpacity onPress={handleClick}>
          <Image
            source={require("./assets/profile.png")}
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <MailItem
          logo={"L"}
          name={"Lawazia Tech"}
          heading={"Greeting form Lawazia Tech."}
          msg={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          time={"7.12 PM"}
          navigation={navigation}
        />

        <MailItem
          logo={"I"}
          name={"Internshala"}
          heading={"New Interships for you.."}
          msg={`Hi Anuj,The number of internships you do during your college time is directly going to help you get your dream job. The more internships you do, the more connections and experience you will gain. 
          We have filtered an exclusive list of internships that might fit well with your skilsets. Please do check out the list and apply for 7-8 such internships to increase your chances of getting selected (Students who got Offers through our platform did the same).
           Regards,
          Team Cuvette
          
          `}
          time={"7.05 PM"}
          navigation={navigation}
        />

        <MailItem
          logo={"I"}
          name={"Internshala"}
          heading={"New Interships for you.."}
          msg={`Hi Anuj,The number of internships you do during your college time is directly going to help you get your dream job. The more internships you do, the more connections and experience you will gain. 
          We have filtered an exclusive list of internships that might fit well with your skilsets. Please do check out the list and apply for 7-8 such internships to increase your chances of getting selected (Students who got Offers through our platform did the same).
           Regards,
          Team Cuvette
          
          `}
          time={"6:32 PM"}
          navigation={navigation}
        />

        <MailItem
          logo={"L"}
          name={"Linkedin"}
          heading={"New message in Inbox"}
          msg={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          time={"6:08 PM"}
          navigation={navigation}
        />
        <MailItem
          logo={"L"}
          name={"Linkedin"}
          heading={"New connection request"}
          msg={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          time={"5:56 PM"}
          navigation={navigation}
        />

        <MailItem
          logo={"I"}
          name={"Internshala"}
          heading={"New Interships for you.."}
          msg={`Hi Anuj,The number of internships you do during your college time is directly going to help you get your dream job. The more internships you do, the more connections and experience you will gain. 
          We have filtered an exclusive list of internships that might fit well with your skilsets. Please do check out the list and apply for 7-8 such internships to increase your chances of getting selected (Students who got Offers through our platform did the same).
           Regards,
          Team Cuvette
          
          `}
          time={"5:23 PM"}
          navigation={navigation}
        />
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    margin: 3,
    backgroundColor: "#E3F4F4",
  },
});
