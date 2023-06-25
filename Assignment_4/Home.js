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
import Constants from 'expo-constants';

export default function HomeScreen({ navigation }) {
  const emails = [
    {
      id: 1,
      profile: require('./assets/h.png'),
      head: 'MakeStories Alerts',
      subject: 'Important Notice: Account Data Deletion Due to Inactivity',
      content:
        'We hope this email finds you well. We are reaching out to inform you of an important update regarding your account with MakeStories.io',
      date: '10 Jun',
      star: require('./assets/star.png'),
    },

    {
      id: 2,
      profile: require('./assets/r.png'),
      head: 'Adobe',
      subject: 'Your Adobe ID password has changed',
      content: 'Dear Karan Kr,	 Recently your AdobeID password has changed.',
      date: '10 Jun',
      star: require('./assets/star1.png'),
    },

    {
      id: 3,
      profile: require('./assets/x.png'),
      head: 'Amazo web services',
      subject: 'Explore free AWS Training and Certification resources',
      content:
        'Focus on the cloud skills and services that are most relevant to you across 30+ AWS solutions',
      date: '10 Jun',
      star: require('./assets/star1.png'),
    },

    {
      id: 4,
      profile: require('./assets/l.png'),
      head: 'Google',
      subject: 'Help strengthen the security of your Google Account',
      content:
        'Google can use this phone number to contact you if you need help signing in or if we notice suspicious activity.',
      date: '10 Jun',
      star: require('./assets/star.png'),
    },

    {
      id: 1,
      profile: require('./assets/h.png'),
      head: 'MakeStories Alerts',
      subject: 'Important Notice: Account Data Deletion Due to Inactivity',
      content:
        'We hope this email finds you well. We are reaching out to inform you of an important update regarding your account with MakeStories.io',
      date: '10 Jun',
      star: require('./assets/star.png'),
    },

    {
      id: 2,
      profile: require('./assets/r.png'),
      head: 'Adobe',
      subject: 'Your Adobe ID password has changed',
      content: 'Dear Karan Kr,	 Recently your AdobeID password has changed.',
      date: '10 Jun',
      star: require('./assets/star1.png'),
    },

    {
      id: 1,
      profile: require('./assets/a.png'),
      head: 'MakeStories Alerts',
      subject: 'Important Notice: Account Data Deletion Due to Inactivity',
      content:
        'We hope this email finds you well. We are reaching out to inform you of an important update regarding your account with MakeStories.io',
      date: '10 Jun',
      star: require('./assets/star.png'),
    },

    {
      id: 2,
      profile: require('./assets/h.png'),
      head: 'Adobe',
      subject: 'Your Adobe ID password has changed',
      content: 'Dear Karan Kr,	 Recently your AdobeID password has changed.',
      date: '10 Jun',
      star: require('./assets/star.png'),
    },

    {
      id: 3,
      profile: require('./assets/r.png'),
      head: 'Amazo web services',
      subject: 'Explore free AWS Training and Certification resources',
      content:
        'Focus on the cloud skills and services that are most relevant to you across 30+ AWS solutions',
      date: '10 Jun',
      star: require('./assets/star1.png'),
    },

    {
      id: 4,
      profile: require('./assets/x.png'),
      head: 'Google',
      subject: 'Help strengthen the security of your Google Account',
      content:
        'Google can use this phone number to contact you if you need help signing in or if we notice suspicious activity.',
      date: '10 Jun',
      star: require('./assets/star1.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mail}
      onPress={() => {
        navigation.navigate('MailBox', { item });
      }}>
      <View style={styles.mailImage}>
        <Image source={item.profile} style={styles.logo} />
      </View>

      <View style={styles.mailContent}>
        <Text style={styles.mailAuthor}>{item.head}</Text>
        <Text style={styles.mailHead} numberOfLines={1}>
          {item.subject}
        </Text>
        <Text style={styles.mailText} numberOfLines={1}>
          {}
          {item.content}
        </Text>
      </View>

      <View style={styles.dateTime}>
        <Text style={styles.mailDate}>{item.date}</Text>
        <Image source={item.star} style={styles.refreshIcon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.InnerContainer}>
          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.openDrawer()}>
              <Image style={styles.menu} source={require('./assets/menu.png')} />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Search in emails" />
            <View style={styles.profileContainer}>
              <Image style={styles.profile} source={require('./assets/profile.jpg')} />
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
                  source={require('./assets/refresh.png')}
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
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.messageBox}>
          <Image source={require('./assets/message.png')} style={styles.messageIcon} />
        </View>
        <Image source={require('./assets/zoom.png')} style={styles.ZoomIcon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 680,
    backgroundColor: '#181818',
    flex:1
  },

  InnerContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  scrollView: {
    flex:1
  },

  input: {
    textAlign: 'center',
    height: 40,
    backgroundColor: '#3C3E3F',
    placeholderTextColor: 'white',
    opacity: 0.7,
    flex: 1,
    outlineStyle: 'none',
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
    borderRadius: '50%',
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
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },

  menuContainer: {
    backgroundColor: '#3C3E3F',
    height: 40,
    width: 40,
    alignItem: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
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

  ZoomIcon: {
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