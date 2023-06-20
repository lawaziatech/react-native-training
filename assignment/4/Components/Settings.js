import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const settingScreen = (props) => {
  const settings = [
    { id: '1', name: 'General settings' },
    { id: '2', name: 'mahimagupta22@Gmail.com' },
    { id: '3', name: 'contactme56@Gmail.com' },
    { id: '4', name: 'guptamahima66@Gmail.com' },
    { id: '5', name: 'mahima22@Gmail.com' },
    { id: '6', name: 'contactmahima44@Gmail.com' },
    { id: '7', name: 'Add Account' },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.settingContainer}>
        <Text style={styles.settingText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeadSetting}>
        <View style={styles.LeftElement}>
          <TouchableOpacity
            style={styles.LeftImage}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={require("./backimg.png")} style={styles.HeadImage} />
          </TouchableOpacity>
          <Text style={styles.dot}>Settings</Text>
        </View>

        <View style={styles.dotMenu}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.dot}>.</Text>
        </View>
      </View>
      <FlatList
        data={settings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default settingScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#181818',
    height: 680,
  },

  LeftElement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  HeadSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  settingContainer: {
    marginTop: 10,
  },

  HeadImage: {
    height: 20,
    width: 25,
  },

  dotMenu: {
    flexDirection: 'column',
    marginBottom: 10,
  },

  dot: {
    lineHeight: 7,
    fontSize: 25,
    fontWeight: 600,
    color: '#B0AEAE',
    marginLeft: 20,
  },

  settingText: {
    color: '#B0AEAE',
    fontWeight: 600,
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
});