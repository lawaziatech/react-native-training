import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
/*import Contacts from './Assignment/1/Index';
import Gmail_Clone from './Assignment/2/App';
import Counter_App from './Assignment/3/App';*/
// import FlatMAil from './Assignment/4/components/Home';
import Mail from "./Assignment/4/App";
export default function App() {
  return (
    //<Contacts/>
    //<Gmail_Clone/>
    // <Counter_App/>
    //  <FlatMAil/>
    <Mail />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
