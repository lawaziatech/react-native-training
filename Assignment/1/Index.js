import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function Contacts() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONTACTS</Text>
      <View style={styles.contentContainer}>
        <Image
          style={styles.icon}
          source={require('./assets/pexels-mohamed-abdelghaffar-771742.jpg')}
        />
        <Text style={styles.contact}>Tanuj</Text>
      </View>
      <View>
        <Text style={styles.number}>9587412300</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.icon}
          source={require('./assets/pexels-mohamed-abdelghaffar-771742.jpg')}
        />
        <Text style={styles.contact}>Ashu</Text>
      </View>
      <View>
        <Text style={styles.number}>8712412300</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.icon}
          source={require('./assets/pexels-mohamed-abdelghaffar-771742.jpg')}
        />
        <Text style={styles.contact}>Namita</Text>
      </View>
      <View>
        <Text style={styles.number}>6210879325</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.icon}
          source={require('./assets/pexels-mohamed-abdelghaffar-771742.jpg')}
        />
        <Text style={styles.contact}>Ram</Text>
      </View>
      <View>
        <Text style={styles.number}>7541984632</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.icon}
          source={require('./assets/pexels-mohamed-abdelghaffar-771742.jpg')}
        />
        <Text style={styles.contact}>Gaurav</Text>
      </View>
      <View>
        <Text style={styles.number}>7541236895</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.icon}
          source={require('./assets/pexels-mohamed-abdelghaffar-771742.jpg')}
        />
        <Text style={styles.contact}>Tenzing</Text>
      </View>
      <View>
        <Text style={styles.number}>6214789632</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#A8CBC8',
    padding: 10,
  },
  heading: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    margin: 24,
    textAlign: 'center',
    backgroundColor:"#4CADCB",
    borderRadius:10
  },
  contentContainer: {
    //justifyContent:"space-between",
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact: {
    fontSize: 20,
    marginLeft: 150, // Add some margin between the image and text
  },
  number: {
    fontSize: 15,
    marginLeft: 210,
    justifyContent:"space-between",
  },
  icon: {
    width: 66,
    height: 58,
  },
});

