import React, {useState} from 'react';
import { Text, View, StyleSheet,Button, TouchableOpacity,onPress} from 'react-native';
import Constants from 'expo-constants';

const MyButton=({text,color,onPress})=>{
return(
   <TouchableOpacity style={[styles.Button,{backgroundColor:color}]} onPress={onPress}>
        <Text style={styles.ButtonText}>{text}</Text>
   </TouchableOpacity>
);
}


export default function CounterApp() {
const [count, updateCount] = useState(0);


  const Increase = () => {
    updateCount(count+1);
  };
  
  
  const Decrease = () => {
    if(count>0)
        updateCount(count-1);
    else
      updateCount(0);
  };
  
  
  const Reset = () => {
    updateCount(0);
  };
  return (
   <View style={styles.container}>
       <View style={styles.appContainer}>
            <View style={styles.display}>
             <Text style={styles.displayText}>{count}</Text>
             </View>
           <View style={styles.appButton}>
           
           <MyButton color="#0079FF" text="Increment" onPress={Increase}/>
           <MyButton color="#22A699" text="Reset" onPress={Reset}/>
           <MyButton color="#F24C3D" text="Decrement" onPress={Decrease}/>
      
           </View>
       </View>
   </View>
  );
};


  
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'orange',
    height:780,
    width:320
  },
  
  appContainer:{
  borderColor:'grey',
  borderRadius:20,
  backgroundColor:'white',
  paddingVertical:100,
  width:'90%',
  paddingHorizontal:10
  },
  
  appButton:{
  flexDirection:'row',
  justifyContent:'space-between',
  },
  
  
  Button:{
  justifyContent:'center',
  height:40,
  width:'30%',
  borderRadius:10,
  alignItems:'center',
  },
  
  displayText:{
   fontSize:50,
   fontweight:600
  },
  
  ButtonText:{
  fontSize:11,
  color:'white',
  padding:10,
  fontWeight:700
  },
  
  display:{
   alignItems:'center',
   marginBottom:20
  },
});
