import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CheckBox from "expo-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree]= useState(false);
    const handleSignup = () => {
      const signupData = {
        userName: username,
        email: email,
        password: password,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      };
    fetch('https://bloggler-backend.vercel.app/api/user/signup', options)
  .then((response) => response.json())
  .then((data) => {
    const token = data.access_token;
    console.log('Signup successful:', data);
    AsyncStorage.setItem('token',token);
  })
  .catch((error) => {
    console.error('Signup failed:', error);
  });
    }
    return (
         <View style = {styles.container}>
            <Text style = {styles.heading}>Welcome!!</Text>
            <View>
        <View style ={styles.c2}>

            <Text style= {styles.text}>Enter your name</Text>
            <TextInput style = {styles.inputStyle}
              autoCaptialize="none"
              autoCorrect= {false}
              placeholder='Username'
              value={username}
              onChangeText={(data)=> setUsername(data)}
              />

            <Text style= {styles.text}>Enter your Email</Text>
            <TextInput style = {styles.inputStyle}
              autoCaptialize="none"
              autoCorrect= {false}
              placeholder='Email'
              value={email}
              onChangeText={(data)=> setEmail(data)}
              keyboardType='email address'
              />
              <Text style= {styles.text}>Enter your password</Text>
            <TextInput style = {styles.inputStyle}
              autoCaptialize="none"
              autoCorrect= {false}
              secureTextEntry={true}
              placeholder='Password'
              value={password}
              onChangeText={(data)=> setPassword(data)}
              />
              </View>
            <View style={styles.checkbox}>
                <CheckBox
                value={agree}
                onValueChange={()=> 
                    setAgree(!agree)}
                    color={agree? "#164863": undefined}
                    />
                    <Text>I have fill the above details</Text>
            </View>
           <TouchableOpacity style={[styles.buttonstyle,{backgroundColor:agree?"#164863":"grey",},
        ]}
        disabled={!agree}>
            <Text style={styles.buttonText}onPress={handleSignup} >SIGN IN</Text>
           </TouchableOpacity>
        </View>
</View>
    );
};
export default Login;

const styles = StyleSheet.create({

    container:{
        paddingHorizontal:50,
        paddingTop:50,
        backgroundColor:"#C2DEDC",
        flex:1,
    },
    heading:{
        fontSize:35,
        fontWeight:"500",
        color:"black",
        paddingTop:90,
        fontFamily:"cursive",
        paddingLeft:35,
        paddingBottom:50,
    },
    text:{
        fontSize:18,
        color:"black",
        fontFamily:"serif",
        marginRight:70,
    
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"black",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:5,
        fontFamily:"regular",
        fontSize:18,
        backgroundColor:"#EBE3D5",
        marginTop:5,
    },
    buttonstyle: {
        paddingTop:30,
        backgroundColor: 'grey',
        paddingVertical: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:"center",
        marginTop:20,
      },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
      checkbox:{
        marginTop:6,
        flexDirection:'row',
      }
    
})