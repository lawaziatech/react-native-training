import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Contact from './assignment/1/index';
// import Email from './assignment/2/App';
import CounterApp from './assignment/3/App';
export default function App() {
  return (
    // <Contact/>
    // <Email/>
    <CounterApp/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
