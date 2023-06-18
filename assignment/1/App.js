import React from 'react'
import { Text, View,SafeAreaView,TextInput,Image,StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';

const App=()=>{

  return (
    <SafeAreaView style ={styles.container}>
    <View style={styles.topIcon}>
      <Image style ={styles.addIcon}  source={require ("./add.png")}/>
      <Image style ={styles.settingIcon} source= {require ("./setting.png")}/>
      </View>
        
    <View style={styles.Innercontainer}>
<View>
   <TextInput style={styles.input} placeholder="Search among your contact"/>
    </View>

    
      <View style={styles.contactContainer}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.leftAlphabet}>
     
      <View>
      <Text style={styles.Favcontacts}>FAVOURITES ❤️</Text>
      </View>
      
      <View style={styles.Contacts}>
      
    <Image  style={styles.contactImage} source={require("./p.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Puja</Text>
      </View>
      </View>
  
      </View>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./t.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Tanya</Text>
      </View>
      </View>
      
      
      <View>
      <Text style={styles.allcontacts}>ALL CONTACTS</Text>
      </View>
      
      
      
      <View style={styles.contactsList}>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./aa.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Abhishek</Text>
      </View>
      </View>
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./bb.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Bharsa</Text>
      </View>
      </View>
      
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./cc.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Chavi</Text>
      </View>
      </View>
      
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./e.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Eshita</Text>
      </View>
      </View>
      
      
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./f.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Flexy</Text>
      </View>
      </View>
           
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./g.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Garima</Text>
      </View>
      </View>
            
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./mm.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Mona</Text>
      </View>
      </View>
            
      
      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./t.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Tanvi</Text>
      </View>
      </View>

      <View style={styles.Contacts}>
      <Image  style={styles.contactImage} source={require("./u.png")}/>
      <View style={styles.contactName}>
      <Text style={styles.Name}>Upashna</Text>
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
    backgroundColor: 'black',
  },
 
  InnerContainer: { // Corrected capitalization of innerContainer
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
       input: {
       backgroundColor:'orange',
       borderRadius: 20,
       height:35,
       placeholderTextColor:'white',
       textAlign:'center',
       opacity:0.7,
       },
       scrollView:{
       showsVerticalScrollIndicator:'false',
       height: 620,},
       
       allcontacts: {
       color:'grey',
       marginBottom:20,
       },
       
       rightAlphabet: {
       textAlign: 'center',
       width:10,
       },
       
       rightText:{
       fontSize:10,
       color:'grey',
       lineHeight:18,
       },
       Favcontacts:{
       color:'grey',
       marginBottom:10,
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

addIcon:{
       height: 40,
       width: 40,
       backgroundColor: '#00B4D8',      
       borderRadius: '50%',
       marginLeft:200,
      
       },
       settingIcon:{
       height: 40,
       width: 40,
       backgroundColor: '#00F962',
       borderRadius: '50%',
       marginRight:25,
       },
        topIcon:{
       marginTop: 20,
       flexDirection: 'row',}
        });
export default App;

