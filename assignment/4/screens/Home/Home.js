import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import emails from '../../constant/emailData';
import MailItem from './MailItem';

export default function HomeScreen({ navigation }) {


  const renderItem = ({ item }) => (
    <MailItem item={item} navigation={navigation}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.InnerContainer}>
          <View style={styles.searchBar}>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("Settings")}>
              <Image style={styles.menu} source={require('../../../../assets/menu.png')} />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Search in emails" />
            <View style={styles.profileContainer}>
              <Image style={styles.profile} source={require('../../../../assets/pic.jpg')} />
            </View>
          </View>

          <View style={styles.header}>
            <View>
              <Text style={styles.Primary}>Primary</Text>
            </View>

            <View style={styles.headerBottom}>
              <TouchableOpacity>
                <Image
                  style={styles.refreshIcon}
                  source={require('../../../../assets/refresh.png')}
                />
              </TouchableOpacity>
              <Text style={styles.Primary2}>
                Auto-sync is off. Tap to turn on.
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://google.com')}>
                <Text style={{ color: 'skyblue' }}>dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.hairLine}></View>
        <View style={styles.InnerContainer}>
          <View style={styles.mailBox}>
            <FlatList
              data={emails}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.messageBox}>
          <Image source={require('../../../../assets/message.jpg')} style={styles.messageIcon} />
        </View>
        <Image source={require('../../../../assets/meet.png')} style={styles.MeetIcon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 680,
    backgroundColor: '#181818',
    paddingTop:40
  },

  InnerContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  scrollView: {
    height: 680,
  },

  input: {
    textAlign: 'center',
    height: 40,
    backgroundColor: '#3C3E3F',
    // placeholderTextColor: 'white',
    opacity: 0.7,
    flex: 1,
    // outlineStyle: 'none',
    color: 'white',
  },

  Primary: {
    color: '#B0AEAE',
    fontWeight: 500,
    fontSize: 10,
    fontFamily: 'sans-serif',
  },

  Primary2: {
    color: '#B0AEAE',
    fontSize: 13,
    fontFamily: 'sans-serif',
  },

  header: {
    marginTop: 20,
    marginBottom: 10,
  },

  refreshIcon: {
    height: 15,
    width: 15,
  },

  searchBar: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
  },

  headerBottom: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hairLine: {
    borderBottomColor: '#B0AEAE',
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity: 0.5,
  },

  profile: {
    height: 25,
    width: 25,
    borderRadius: 25,
  },

  menu: {
    height: 25,
    width: 25,
  },

  profileContainer: {
    backgroundColor: '#3C3E3F',
    height: 40,
    width: 40,
    alignItem: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  menuContainer: {
    backgroundColor: '#3C3E3F',
    height: 40,
    width: 40,
    alignItem: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 15,
  },

  mail: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  mailContent: {
    flex: 1,
    marginLeft: 20,
  },
  mailAuthor: {
    color: '#B0AEAE',
    fontWeight: 600,
    fontSize: 17,
    fontFamily: 'sans-serif',
  },
  mailHead: {
    color: '#B0AEAE',
    fontWeight: 500,
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
  mailText: {
    color: '#B0AEAE',
    fontWeight: 300,
    fontSize: 12,
    fontFamily: 'sans-serif',
  },
  dateTime: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mailDate: {
    color: '#B0AEAE',
    fontWeight: 500,
  },

  logo: {
    height: 40,
    width: 40,
  },

  mailImage: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },

  footer: {
    backgroundColor: '#3C3E3F',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },

  MeetIcon: {
    height: 32,
    width: 30,
    marginLeft: 100,
  },

  messageIcon: {
    height: 20,
    width: 24,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 20,
  },

  messageBox: {
    backgroundColor: '#0369A6',
    borderRadius: 20,
  },
});
