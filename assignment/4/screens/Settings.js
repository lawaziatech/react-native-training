import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const Settings = (props) => {
  const settings = [
    
    { id: '2', name: 'All inboxes', icon: require('../../../assets/allinbox.png'), subheader: false },
    { id: '3', name: 'Primary', icon: require('../../../assets/primary.png'), subheader: false },
    { id: '4', name: 'Promotion', icon: require('../../../assets/promot.png'), subheader: false },
    { id: '5', name: 'Social', icon: require('../../../assets/team.png'), subheader: false },
    { id: '6', name: 'All Labels', subheader: true },
    { id: '7', name: 'Starred', icon: require('../../../assets/star2.png'), subheader: false },
    { id: '8', name: 'Snooze', icon: require('../../../assets/rest-time.png'), subheader: false },
    { id: '9', name: 'Important', icon: require('../../../assets/s.jpg'), subheader: false },
    { id: '10', name: 'Sent', icon: require('../../../assets/sent.png'), subheader: false },
    { id: '11', name: 'Outbox', icon: require('../../../assets/outbox.jpg'), subheader: false },
    { id: '12', name: 'Drafts', icon: require('../../../assets/draft.jpg'), subheader: false },
    { id: '13', name: 'All mail', icon: require('../../../assets/allmail.png'), subheader: false },
    { id: '14', name: 'Spam', icon: require('../../../assets/spam1.png'), subheader: false },
    { id: '15', name: 'Trash', icon: require('../../../assets/delete.png'), subheader: false },
     { id: '16', name: 'Google apps', subheader: true },
    { id: '17', name: 'Calendar', icon: require('../../../assets/calendar.png'), subheader: false },
    { id: '18', name: 'Contacts', icon: require('../../../assets/user.png'), subheader: false },
     { id: '19', name: '', subheader: true },
    { id: '20', name: 'Settings', icon: require('../../../assets/setting.png'), subheader: false },
    { id: '21', name: 'Help & feedback', icon: require('../../../assets/question.png'), subheader: false },
    
  ];

  const renderItem = ({ item }) => {
    if (item.subheader) {
      return (
        <View style={styles.subheaderContainer}>
          <View style={styles.subheaderLine} />
          <Text style={styles.subheaderText}>{item.name}</Text>
          <View style={styles.subheaderLine} />
        </View>
      );
    }

    if (item.name === 'Settings') {
      return (
        <TouchableOpacity
          style={styles.settingContainer}
          onPress={() => {
            props.navigation.navigate('InsideSettings');
          }}
        >
          {item.icon && <Image source={item.icon} style={styles.settingIcon} />}
          <Text style={styles.settingText}>{item.name}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity style={styles.settingContainer}>
        {item.icon && <Image source={item.icon} style={styles.settingIcon} />}
        <Text style={styles.settingText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.headSetting}>
        <View style={styles.leftElement}>
          <TouchableOpacity
            style={styles.leftImage}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Image source={require('../../../assets/back.png')} style={styles.headImage} />
          </TouchableOpacity>
          <Text style={styles.dot}>
            <Text style={styles.gmailText}>Gmail</Text>
          </Text>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#181818',
    height: 757,
  },
  leftElement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  subheaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  subheaderLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#B0AEAE',
    marginLeft: 10,
    marginRight: 10,
  },
  subheaderText: {
    color: '#B0AEAE',
    fontWeight: '600',
    fontSize: 15,
    fontFamily: 'sans-serif',
    padding:30
  },
  headImage: {
    height: 25,
    paddingTop:40,
    width: 40,
  },
  settingIcon: {
    height: 20,
    paddingTop:40,
    width: 20,
    marginRight: 10,
  },
  dotMenu: {
    flexDirection: 'column',
    marginBottom: 10,
    paddingTop:40,
  },
  dot: {
    lineHeight: 20,
    fontSize: 30,
    fontWeight: '600',
    color: '#B0AEAE',
    marginLeft: 20,
    //paddingTop:40,
  },
  settingIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
    
  },
  settingText: {
    color: '#B0AEAE',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'sans-serif',
    
  },
  gmailText: {
    color: 'red',
    paddingTop:60,

  },
});

export default Settings;
