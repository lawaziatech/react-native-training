import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';



export default function Contact() {
  return (<View>
    
    <View style={{backgroundColor:"pink",borderRadius:10}}>
         <Text style={styles.paragraph}>contact</Text>  
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:50,width:50}} source={require("./assets/github.png")}/>
     
 <Text style={styles.boldtext}>JANNAT KHATOON
      
    </Text>
    </View>

    
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:50,width:50}} source={require("./assets/github.png")}/>
     
 <Text style={styles.boldtext}>ISHRAT
      
    </Text>
    </View>


    <View style={{backgroundColor:"#25D366",borderRadius:10}}>
        
    </View>

  
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:50,width:50}} source={require("./assets/github.png")}/>
     
 <Text style={styles.boldtext}>AAYAT
      
    </Text>
    </View>

    
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:50,width:50}} source={require("./assets/github.png")}/>
     
 <Text style={styles.boldtext}>MANNAT
      
    </Text>
    </View>


    <View style={{backgroundColor:"#25D366",borderRadius:10}}>
        
    </View>
    
    <Text style ={{textAlign :"center"}}>jhgg
     </Text>
     </View>);


    
    
    
    
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
