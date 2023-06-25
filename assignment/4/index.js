import * as React from "react";
import {Text,View,StyleSheet,Image,SafeAreaView} from "react-native";
import constants from "expo-constants";
import Mail from "./components/mail";
import footer from "./components/footer";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <SafeAreaView style={{paddingTop:50}}>
            <StatusBar style="auto"/>

            <View style={StyleSheet.container}>
                <Image source={require("./assets/menu-bar (2).png")} />
<Text style={{flex:1,paddingLeft:10}}>Search in emails</Text>
<Image source={require("./assets/beauty (1).png")} />
            </View>

            <Mail
        logo={"N"}
        text1={'Nykaa'}
        text2={'Going back to college??'}
        text3={'We have affordable skincare up for...'}
        time={'4:14pm'}
      />
       <Mail
        logo={"G"}
        text1={'Google Play'}
        text2={'Updates to Google Play terms of...'}
        text3={'Google Play on March15, 2023,we...'}
        time={'5:45pm'}
      />
      <Mail
       logo={"S"}
        text1={'Sanjana'}
        text2={'Share request for Lawazia tech...'}
        text3={'Share a document?Sanjana(riya123...'}
        time={'7:35pm'}
      />
      <Mail
        logo={"I"}
        text1={'Instagram'}
        text2={'Reset Your password'}
        text3={'Hi muskanriya28,We got a request t...'}
        time={'8:35pm'}
      />
      <Mail
       logo={"Y"}
        text1={'YouTube'}
        text2={'You can now choose your YouTub...'}
        text3={'YouTube Creator Youtube is introdu...'}
        time={'10:25pm'}
      />
      <footer/>
      </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        borderRadius:10,
        margin:3,
        backgroundColor:"yellow",
    },
});