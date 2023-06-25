import * as React from 'react';
import {
  Text, View, StyleSheet, Image,FlatList,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const MailScreen = (props) => {
  const Item = props.route.params.item;

  return (
    <View style={styles.Outercontainer}>
      <View style={styles.container}>
        <View style={styles.HeadImageBox}>
          <TouchableOpacity
            style={styles.LeftImage}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={require('../../../assets/back.png')} style={styles.HeadImage} />
          </TouchableOpacity>
          <View style={styles.RightImage}>
            <Image source={require('../../../assets/archive.png')} style={styles.HeadImage} />
            <Image source={require('../../../assets/delete.png')} style={styles.HeadImage} />
            <Image
              source={require('../../../assets/message.jpg')}
              style={styles.HeadImage}
            />
          </View>
        </View>

        <View style={styles.HeadBox}>
          <View style={styles.HeadTextBox}>
            <Text style={styles.HeadText}>
              {Item.subject}
              <View style={styles.Inbox}>
                <Text style={styles.InboxText}>Inbox</Text>
              </View>
            </Text>
          </View>
          <View style={styles.starBox}>
            <Image source={Item.star} style={styles.starImage} />
          </View>
        </View>

        <View style={styles.senderDetails}>
          <View style={styles.mail}>
            <View style={styles.mailImage}>
              <Image source={Item.profile} style={styles.logo} />
            </View>

            <View style={styles.mailContent}>
              <Text style={styles.mailAuthor} numberOfLines={1}>
                {Item.head}
              </Text>
              <Text style={styles.mailText}>To me </Text>
            </View>

            <View style={styles.dateTime}>
              <Text style={styles.mailDate}>5 days ago</Text>
            </View>
            <View style={styles.dotMenu}>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.dot}>.</Text>
            </View>
          </View>
        </View>

        <View style={styles.MessageBox}>
          <Text style={styles.MessageText}>{Item.content}</Text>
        </View>

        <View style={styles.ArrowNav}>
          <TouchableOpacity style={styles.ButtonNav}>
            <Text style={styles.navText}>reply</Text>
            <Image source={require('../../../assets/reply.png')} style={styles.arrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonNav}>
            <Text style={styles.navText}>reply all</Text>
            <Image source={require('../../../assets/replyall.png')} style={styles.arrow} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ButtonNav}>
            <Text style={styles.navText}>forward</Text>
            <Image source={require('../../../assets/forward.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.messageBottomBox}>
          <Image source={require('../../../assets/message.jpg')} style={styles.messageIcon} />
        </View>
        <Image source={require('../../../assets/meet.png')} style={styles.MeetIcon} />
      </View>
    </View>
  );
};

export default MailScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#181818',
    height: 680,
    flex: 1,
  },

  Outercontainer: {
    backgroundColor: '#181818',
    height: 680,
  },

  ArrowNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  navText: {
    color: '#B0AEAE',
    fontSize: 10,
    fontWeight: 500,
  },

  arrow: {
    height: 12,
    width: 15,
    marginLeft: 5,
  },

  ButtonNav: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#B0AEAE',
    padding: 10,
    width: 55,
    height: 30,
    paddingHorizontal: 35,
  },

  footer: {
    backgroundColor: '#3C3E3F',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    marginTop: 20,
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

  messageBottomBox: {
    backgroundColor: '#0369A6',
    borderRadius: 20,
  },

  settingContainer: {
    marginTop: 10,
  },

  HeadImage: {
    height: 20,
    width: 20,
    marginLeft: 10,
    padding:15
  },

  HeadBox: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  dotMenu: {
    flexDirection: 'column',
    marginLeft: 8,
  },

  dot: {
    lineHeight: 6,
    fontSize: 20,
    fontWeight: 700,
    color: '#B0AEAE',
  },

  starImage: {
    height: 15,
    width: 15,
    marginBottom: 10,
  },

  HeadTextBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  RightImage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  HeadImageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  MessageBox: {
    flex: 1,
  },

  MessageText: {
    color: 'white',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 15,
  },

  InboxText: {
    color: '#B0AEAE',
    fontWeight: 400,
    fontSize: 10,
    fontFamily: 'sans-serif',
    padding: 5,
  },

  Inbox: {
    justifyContent: 'center',
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B0AEAE',
    margin: 10,
  },

  HeadText: {
    color: '#B0AEAE',
    fontWeight: 500,
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  mail: {
    marginTop: 30,
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },

  mailContent: {
    flex: 1,
    marginLeft: 10,
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
    fontWeight: 400,
    fontSize: 12,
  },

  logo: {
    height: 40,
    width: 40,
  },

  mailImage: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
});
