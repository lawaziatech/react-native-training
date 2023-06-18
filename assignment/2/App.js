import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

const Mail = (props) => {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Image source={props.img} style={styles.icon} />
        <View style = {{flexDirection:'column'}}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style = {styles.text1}>{props.text1}</Text>
        <Text style={styles.time}>{props.time}</Text>
        </View>
        <Text style = {styles.text2}>{props.text2}</Text>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style = {styles.text3}>{props.text3}</Text>
        <Image 
        source = {require('./starr.png')}
        style = {styles.star}
        />
        </View>
        
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headingDesign}>
      <Image 
      source = {require('./assets/c.png')}
      style = {styles.icon1}
      />
      
        <Text style ={styles.headingText}>
          {' Search in emails  '}
        </Text>
        <Image 
      source = {require('./assets/profile.png')}
      style = {styles.icon1}
      />
      </View>
      <Text style ={styles.text4}> Primary </Text>
      <Mail 
      img={require('./assets/Internshala.jpg')} text1={'Internshala Trainings'} time={'7:31 pm'}
      text2={'Mahima, new internships in  ... '} 
      text3={'Internshala Hi Mahima,Here are some....'}
      />
      <Mail 
      img={require('./assets/google.png')} text1={'Google'} time={'6:02 pm'}
      text2={'Your Google Account was recovered su... '} 
      text3={'Account recovered successfully 12345...'}
      />
      <Mail 
      img={require('./assets/m.png')} text1={'Myntra'} time={'6 Jun'}
      text2={'Press This Button For Freshness... '} 
      text3={'New Launches Are Waiting For You...'}
      />
      <Mail 
      img={require('./assets/micro.png')} text1={'Microsoft account team'} time={'8 Jun'}
      text2={'Verify your email address...'} 
      text3={'Microsoft account Verify your email ad...'}
      />
      <Mail 
      img={require('./assets/maketrip.png')} text1={'MakeMyTrip'} time={'8 Jun'}
      text2={'We have Increased Discounts, just...'} 
      text3={'Open to know more...Download the App...'}
      />
      <View style={styles.footer}>
      <Image 
      source={require('./assets/email.png')} 
      style ={styles.logo}/>
      <Image 
      source={require('./assets/meet.png')} 
      style ={styles.logo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  icon: {
    width: 50,
    height: 45,
    marginRight:10,
  },
  headingDesign: {
    margin: 20,
    backgroundColor: '#EFF4FA',
    borderRadius: 300,
    flexDirection:'row',
  },
  headingText:{
    margin: 8,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily:'Google Sans',
    marginTop:10,
    marginRight: 50,
    },
  contentContainer: {
    margin: 10,
    marginBottom:25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'calibri',
  },
  text2:{
    fontSize: 12,
    fontWeight: 'bold',
    //fontFamily: 'Google Sans',

  },
  text3:{
    fontSize:13,
    fontFamily: 'Google Sans',
  },
  text4: {
    marginLeft:15,
    fontSize:13,
    fontFamily: 'Sans Serif',
  },
  footer:{
    margin: 10,
    backgroundColor: '#EFF4FA',
    borderRadius: 30,
    flexDirection:'row',
  },
  logo:{
    width: 30,
    height: 24,
    margin:10,
    marginLeft:60,
    marginRight:50
  },
  icon1: {
    margin: 5,
    width: 30,
    height: 30,
    //marginRight:10,
  },
  time:{
    fontSize:10,
    fontWeight:'bold',
  },
 star:{
   width:20,
   height:20,
  // position:'absolute',
  right:0,
   marginLeft:10,
   bottom:1,
   //margin:10,

 }
});
