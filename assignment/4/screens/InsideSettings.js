import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InsideSettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/back.png')} style={styles.backButton} />
        </TouchableOpacity>

        {/* Header Title */}
        <Text style={styles.headerTitle}>Settings</Text>

        {/* Settings Icon */}
        <Image source={require('../../../assets/setting.png')} style={styles.settingsIcon} />
      </View>

      {/* Settings Items */}
      <TouchableOpacity style={styles.settingsItem} onPress={() => console.log('General Settings')}>
        <Text style={styles.settingsItemText}>General Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsItem} onPress={() => console.log('jkhatoon276@gmail.com')}>
        <Text style={styles.settingsItemText}>jkhatoon276@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsItem} onPress={() => console.log('Add More')}>
        <Text style={styles.settingsItemText}>Add More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
  settingsItem: {
    padding: 16,
  },
  settingsItemText: {
    color: 'white',
  },
});

export default InsideSettingsScreen;
