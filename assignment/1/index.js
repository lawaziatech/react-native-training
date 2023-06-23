import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm


export default function App() {
  return (
    <View style={{backgroundColour:"#40E0D0",borderRadius:30}}>
         <Text style={styles.paragraph}>MY CONTACT LIST</Text>
    
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:30,width:30}} source={require("./assets/contact.png")}/>

      <Text  >
       Priya Saha 
      </Text>
      <Text>
       620000000073
       </Text>
      </View>
      <View style={{backgroundColour:"powder blue",borderRadius:10}}>
         
    
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:30,width:30}} source={require("./assets/contact.png")}/>

      <Text >
       Rahul Kumar
      </Text>
      <Text>
       920000000073
       </Text>
    </View>

     <View style={{backgroundColor:"powder pink",borderRadius:10}}>
         
    
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:30,width:30}} source={require("./assets/contact.png")}/>

      <Text >
       Garima Kumari
      </Text>
      <Text>
       780000000073
       </Text>
    </View>

    <View style={{backgroundColour:"green",borderRadius:10}}>
         
    
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:30,width:30}} source={require("./assets/contact.png")}/>

      <Text >
       Ravi Kumar
      </Text>
      <Text>
       620005700078
       </Text>
    </View>

    <View style={{backgroundColour:"green",borderRadius:10}}>
         
    
      <View style={{flexDirection:"row",justifyContent:"space-between", padding:20}}>
      <Image style={{height:30,width:30}} source={require("./assets/contact.png")}/>

      <Text >
       Prem Kumar 
      </Text>
      <Text>
       89000000683
       </Text>
    </View>

<View style={{backgroundColour:"green",borderRadius:10}}>
         
    
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:20}}>
      <Image style={{height:30,width:30}} source={require("./assets/contact.png")}/>

      <Text >
       Shruti Pandey
       
      </Text>
      <Text>
       94000007655
       </Text>
    </View>
     
    </View>
    </View>
    </View>
    </View>
    </View>
    </View>
      
  );
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
