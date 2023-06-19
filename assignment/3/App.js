import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
     {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementCount} color="orange" />
        <Button title="Decrement" onPress={decrementCount} color="violet" />
      </View>
      <Button title="Reset" onPress={resetCount} color="red" />
    </View>
  );
};

export default function CounterApp() {
  return (
    
    <View style={styles.appContainer}>
     <Text style = {{fontSize:30 }}>Counter App:</Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'orange'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});