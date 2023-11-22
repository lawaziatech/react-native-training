import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import As5 from "./assignment/5";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <As5 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
