import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';



export default function ContactApp() {
    return (
    
      <SafeAreaView style={styles.container}>
      
      <View style={styles.topIcon}>
      <Image  style={styles.phoneIcon} source={require("./assets/phone.png")}/>
      <Image  style={styles.contactIcon} source={require("./assets/contact.png")}/>
      </View>
      
      <View style={styles.InnerContainer}>
      <View>
     
      <TextInput style={styles.input} placeholder="search contacts"/>
      </View>
      
      
      <View style={styles.contactContainer}>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      
      <View style={styles.leftAlphabet}>
     
      <View>
      <Text style={styles.Favcontacts}>FAVOURITES ❤️</Text>
      </View>
      
      <View style={styles.Contacts}>
      
      <Image  style={styles.contactImage} source={require("./assets/nick.jpeg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Nick Fury</Text>
      </View>
      </View>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/babu.jpg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Babu Rao</Text>
      </View>
      </View>
      
      
      <View>
      <Text style={styles.allcontacts}>ALL CONTACTS</Text>
      </View>
      
      
      
      <View style={styles.contactsList}>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/nobita.jpeg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Nobita</Text>
      </View>
      </View>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/gian.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Gian</Text>
      </View>
      </View>
      
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/shizuka.jpg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Shizuka</Text>
      </View>
      </View>
      
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/peter.jpg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Peter Parker</Text>
      </View>
      </View>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/oggy.jpeg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Oggy</Text>
      </View>
      </View>
      
      
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/jack.jpeg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Jack</Text>
      </View>
      </View>
           
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/bob.jpg")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Bob</Text>
      </View>
      </View>
            
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/tom.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Tom</Text>
      </View>
      </View>
            
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./assets/jerry.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Jerry</Text>
      </View>
      </View>
      
      
      
      
      </View>
      </View>
      </ScrollView>
      
      <View style={styles.rightAlphabet}>
      <Text>❤️</Text>
      <Text style={styles.rightText}>A</Text>
      <Text style={styles.rightText}>B</Text>
      <Text style={styles.rightText}>C</Text>
      <Text style={styles.rightText}>D</Text>
      <Text style={styles.rightText}>E</Text>
      <Text style={styles.rightText}>F</Text>
      <Text style={styles.rightText}>G</Text>
      <Text style={styles.rightText}>H</Text>
      <Text style={styles.rightText}>I</Text>
      <Text style={styles.rightText}>J</Text>
      <Text style={styles.rightText}>K</Text>
      <Text style={styles.rightText}>L</Text>
      <Text style={styles.rightText}>M</Text>
      <Text style={styles.rightText}>N</Text>
      <Text style={styles.rightText}>O</Text>
      <Text style={styles.rightText}>P</Text>
      <Text style={styles.rightText}>A</Text>
      <Text style={styles.rightText}>Q</Text>
      <Text style={styles.rightText}>R</Text>
      <Text style={styles.rightText}>S</Text>
      <Text style={styles.rightText}>T</Text>
      <Text style={styles.rightText}>U</Text>
      <Text style={styles.rightText}>V</Text>
      <Text style={styles.rightText}>W</Text>
      <Text style={styles.rightText}>X</Text>
      <Text style={styles.rightText}>Y</Text>
      <Text style={styles.rightText}>Z</Text>
      </View>
      
      </View>
      
      </View>
   
      </SafeAreaView>
      
      
);
}

    const styles = StyleSheet.create({
       container: {
       backgroundColor:'black',
       flex:1
       
       },
       
       InnerContainer:{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
       },
       
       input: {
       
       backgroundColor:'#B0AEAE',
       borderRadius: 20,
       height:35,
       placeholderTextColor:'white',
       textAlign:'center',
       opacity:0.7,
       },
       
       scrollView:{
       height: 620,
       },
       
       allcontacts: {
       color:'#B0AEAE',
       marginBottom:20,
       },
       
       rightAlphabet: {
       textAlign: 'center',
       width:10,
       },
       
       rightText:{
       fontSize:10,
       color:'#B0AEAE',
       lineHeight:18,
       },
       
      
       
       Favcontacts:{
       color:'#B0AEAE',
       marginBottom:20,
       },
       
       Contacts:{
       marginBottom:40,
       flexDirection: 'row',
       alignItem: 'center',
       textAlign: 'justify',
       
       },
       
       contactsList:{},
       
       contactImage: {
       height: 35,
       width: 35,
       borderColor: 'black',
       borderWidth:1,
       borderRadius: '50%',
       marginRight:40,
     
       },
       
       Name: {
       color: 'white',
       fontSize:15,
       fontWeight: '500',
       fontStyle:'',
       },
       
       contactContainer:{
       marginTop: 50,
       flexDirection: 'row',
       justifyContent: 'space-between',
       },
       
       
       contactName:{
       justifyContent:'center',
       alignItems: 'center',  
       },
       
       phoneIcon:{
       height: 30,
       width: 30,
       backgroundColor: '#00B4D8',      
       borderRadius: '50%',
       
       },
       
       contactIcon:{
       height: 30,
       width: 30,
       backgroundColor: '#00F962',
       borderRadius: '50%',
       marginLeft:50,
       },
       
       topIcon:{
       marginTop: 20,
       flexDirection: 'row',
       justifyContent: 'center',
       
       },
       
    }); 