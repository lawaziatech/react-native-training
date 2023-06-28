import * as React from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import Constants from "expo-constants";

const Mail= (props) => {
    return (<View>
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{fontSize:25}}>{props.logo}</Text>
                </View>

            <View style={{flexDirection:"column"}}>
                <Text style={styles.heading}>{props.text1}</Text>
                <Text style={styles.heading}>{props.text2}</Text>
                <Text style={styles.msg}>{props.text3}</Text>
            </View>
        </View>

        <View>
            <View style={{flexDirection:"column",alignItems: "center"}}>
                <Text style={{marginRight: 5}}>{props.time}</Text>
<Image
source={require("../assets/star (1).png")}
style={{marginTop:6}}
/>
            </View>
        </View>
        </View>
        
    );
};

export default Mail;

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        borderRadius:20,
        margin:3,
        backgroundColor:"red",
    },
    box:{
        backgroundColor:"pink",
        width:30,
        height:30,
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:"100%",
        alignItems:"center",
    },
    mailtext: {
        flex:1,
    },
    heading: {
        fontSize:12,
        fontWeight:"bold",
        paddingLeft:6,
    },
    msg:{
        fontSize:12,
        paddingLeft:6,
    },
});