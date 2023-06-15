import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
} from 'react-native';

import Constants from 'expo-constants';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> {count}</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {count>0 ? setCount(count - 1):setCount(count)
          }}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ResetDesign}>
        <Image
          source={require('./assets/reset.png')}
          style={styles.ImageStyle}
        />

        <TouchableOpacity
          onPress={() => {
            setCount(0);
          }}>
          <Text style={styles.Reset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Counter_App() {
  return (
    <View style={styles.container}>
      <View style={styles.headingDesign}>
        <Text style={styles.headingText}>Counter</Text>
      </View>
      <View>
        <Counter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
    padding: 3,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 150,
    backgroundColor: '#004588',
    margin:20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Google sans',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Reset: {
    color: '#FFAA33',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ResetDesign: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    // left: 120,
  },
  ImageStyle: {
   // position: 'absolute',
   justifyContent: 'center',
    left: -20,
    width: 25,
    height: 25,
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingText: {
    margin: 24,
    fontSize: 55,
    fontFamily: 'Google',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  headingDesign: {
    backgroundColor: '#B31312',
    borderRadius: 100,
  },
});
