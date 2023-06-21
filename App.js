import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';
import Constants from 'expo-constants';
import Mail from "./components/mail"
import Footer from "./components/Footer"
// You can import from local files


export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require("./assets/menu.png")}/>
        <Text style={{flex:1,paddingLeft:10}}>Search in Emails</Text>
        <Image source={require("./assets/profile.png")}/>
      </View>

      <Mail logo={"S"} name={"Superset"} heading={"Avoid these resume mistakes and La..."} msg={"Hey there, 75% of resumes never get re..."}  time={"7.31 PM"}/>

      <Mail logo={"I"} name={"Internshala"} heading={"New Interships for you.."} msg={"hello, Kaushal here is the list of internships.."}  time={"7.05 PM"}/>

      <Mail logo={"I"} name={"Internshala"} heading={"New Interships for you.."} msg={"hello, Kaushal 5 new internships of you.."}  time={"6:32 PM"}/>

      <Mail logo={"L"} name={"Linkedin"} heading={"New message in Inbox"} msg={"hello, Kaushal someone messaged you.."}  time={"6:08 PM"}/>
      <Mail logo={"L"} name={"Linkedin"} heading={"New connection request"} msg={"hello, Kaushal new connection request for you.."}  time={"5:56 PM"}/>

      <Mail logo={"I"} name={"Internshala"} heading={"New Interships for you.."} msg={"hello, Kaushal 5 new internships of you.."}  time={"5:23 PM"}/>
      
      <Footer/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-around",
    padding:5,
    borderRadius:10,
    margin:3,
    backgroundColor:"#E3F4F4"
  },
});

