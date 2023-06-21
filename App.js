import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (<View>
    
    <View style={{backgroundColor:"green",borderRadius:10}}>
         <Text style={styles.paragraph}>Contacts</Text>  
    </View>

    <View>
      <View style={styles.container}>
      <Image source={require("./assets/user.png")} style={styles.image}/>
     <View>
      <Text style={styles.text1} >
      Kaushal Kumar
      </Text>
       <Text style={styles.text2} >
      9123464284
      </Text>
     </View>
      
    </View>


    <View style={styles.container}>
      <Image source={require("./assets/user.png")} style={styles.image}/>
     <View>
      <Text style={styles.text1} >
      Jeesman
      </Text>
       <Text style={styles.text2} >
      6578901234
      </Text>
     </View>
      
    </View>

    <View style={styles.container}>
      <Image source={require("./assets/user.png")} style={styles.image}/>
     <View>
      <Text style={styles.text1} >
      Rahul Singh
      </Text>
       <Text style={styles.text2} >
      8863542404
      </Text>
     </View>
      
    </View>

    <View style={styles.container}>
      <Image source={require("./assets/user.png")} style={styles.image}/>
     <View>
      <Text style={styles.text1} >
      Shreya
      </Text>
       <Text style={styles.text2} >
      9765342543
      </Text>
     </View>
      
    </View>
    </View>
    
    
  </View>);
}

const styles = StyleSheet.create({
 container:{
   flexDirection:"row",justifyContent:"flex-start",padding:20,backgroundColor:"#F8E8EE",width:300,marginLeft:6,borderRadius:10,marginTop:10,shadowColor:"#5C8984",shadowOffset:{height:2,width:5}

 },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    borderWidth:2,borderRadius:100,borderColor:"#5C8984",height:40,width:40
  },
  text1:{marginTop:8,marginLeft:30,fontSize:20},
  text2:{marginTop:4,marginLeft:30,fontSize:15,color:"#5C8984"},
});
