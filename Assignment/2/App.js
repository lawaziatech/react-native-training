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
        source = {require('./assets/star.png')}
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
      source = {require('./assets/menu.png')}
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
      img={require('./assets/S.png')} text1={'Superset'} time={'7:31 pm'}
      text2={'Avoid These Resume Mistakes and La... '} 
      text3={'Hey there, 75% of resumes never get re...'}
      />
      <Mail 
      img={require('./assets/D.png')} text1={'Dipak Singh'} time={'2:02 pm'}
      text2={'deepaksinghbeto invited you to lawaz... '} 
      text3={'GitHub home @deepaksinghbeto has inv...'}
      />
      <Mail 
      img={require('./assets/T.png')} text1={'TCSiON Learning Hub'} time={'10:06 am'}
      text2={'TCS NOT - IT Career Readiness Pack... '} 
      text3={'Dear Candidate, Thank you for subscrib...'}
      />
      <Mail 
      img={require('./assets/P.png')} text1={'Priya Saha (via Google Docs)'} time={'8 Jun'}
      text2={'Share request for Lawazia Tech...'} 
      text3={'Share a document? Priya Saha (priya726...'}
      />
      <Mail 
      img={require('./assets/P.png')} text1={'Priya Saha (via Google Docs)'} time={'8 Jun'}
      text2={'Share request for Lawazia Tech...'} 
      text3={'Share a document? Priya Saha (priya726...'}
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
  }
});
