import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import As4 from "./assignment/4";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <As4 />
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
