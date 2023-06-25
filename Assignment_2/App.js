import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,

} from "react-native";
import Constants from "expo-constants";



export default function GmailClone() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.InnerContainer}>
          <View style={styles.searchBar}>
            <View style={styles.menuContainer}>
              <Image
                style={styles.menu}
                source={require("./assets/menu.png")}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search in emails"
            />
            <View style={styles.profileContainer}>
              <Image
                style={styles.profile}
                source={require("./assets/profile.jpg")}
              />
            </View>
          </View>

          <View style={styles.header}>
            <View>
              <Text style={styles.Primary}>Primary</Text>
            </View>
            <View style={styles.headerBottom}>
              <Image
                style={styles.refreshIcon}
                source={require("./assets/refresh.png")}
              />
              <Text style={styles.Primary2}>
                Auto-sync is off. Tap to turn on.
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("http://google.com")
                }
              >
                <Text style={{ color: "skyblue" }}>
                  dismiss
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.hairLine}></View>
        <View style={styles.InnerContainer}>
          <View style={styles.mailBox}>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/x.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Quora</Text>
                <Text style={styles.mailHead} numberOfLines={1}>More related to "How is Coal India for a B.Tech fresher in Computer Science?"</Text>
                <Text style={styles.mailText} numberOfLines={1} >Coal India has developed/are in the process of developing various apps for it's use like UTTAM, KHAN PRAHARI</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>7 May</Text>
                <Image source={require("./assets/star1.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/m.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>MakeStories Alerts</Text>
                <Text style={styles.mailHead} numberOfLines={1} >Important Notice: Account Data Deletion Due to Inactivity</Text>
                <Text style={styles.mailText} numberOfLines={1} >We hope this email finds you well. We are reaching out to inform you of an important update regarding your account with MakeStories.io</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>11 Jun</Text>
                <Image source={require("./assets/star.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/r.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Facebook</Text>
                <Text style={styles.mailHead} numberOfLines={1}>Did you just reset your password?</Text>
                <Text style={styles.mailText} numberOfLines={1}>This is to let you know that your password has just been reset using the phone number</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>15 Jun</Text>
                <Image source={require("./assets/star1.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/l.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Google</Text>
                <Text style={styles.mailHead} numberOfLines={1} >Help strengthen the security of your Google Account.</Text>
                <Text style={styles.mailText} numberOfLines={1}>Google can use this phone number to contact you if you need help signing in or if we notice suspicious activity.</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>8 July</Text>
                <Image source={require("./assets/star.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/a.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Adobe</Text>
                <Text style={styles.mailHead} numberOfLines={1}>Your Adobe ID password has changed</Text>
                <Text style={styles.mailText} numberOfLines={1} >Dear Karan Kr,
                  Recently your AdobeID password has changed.</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>15 Aug</Text>
                <Image source={require("./assets/star1.png")} style={styles.refreshIcon} />
              </View>
               </View>
             
             
              <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/h.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Paytm Offers</Text>
                <Text style={styles.mailHead}>mail head xyz paytm</Text>
                <Text style={styles.mailText}>mail text paytm xyz</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>Jun 7</Text>
                <Image source={require("./assets/star.png")} style={styles.refreshIcon} />
              </View>
            </View>


            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/x.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Quora</Text>
                <Text style={styles.mailHead}>mail head text xyz</Text>
                <Text style={styles.mailText}>mail body text quora </Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>7 May</Text>
                <Image source={require("./assets/star1.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/m.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>MakeStories Alerts</Text>
                <Text style={styles.mailHead} numberOfLines={1} >Important Notice: Account Data Deletion Due to Inactivity</Text>
                <Text style={styles.mailText} numberOfLines={1} >We hope this email finds you well. We are reaching out to inform you of an important update regarding your account with MakeStories.io</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>11 Jun</Text>
                <Image source={require("./assets/star.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/r.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Facebook</Text>
                <Text style={styles.mailHead}>mail heah Facebook text</Text>
                <Text style={styles.mailText}>mail text content</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>15 Jun</Text>
                <Image source={require("./assets/star.png")} style={styles.refreshIcon} />
              </View>
            </View>

            <View style={styles.mail}>
              <View style={styles.mailImage}>
                <Image source={require("./assets/l.png")} style={styles.logo} /></View>

              <View style={styles.mailContent}>
                <Text style={styles.mailAuthor}>Google</Text>
                <Text style={styles.mailHead} numberOfLines={1} >Help strengthen the security of your Google Account.</Text>
                <Text style={styles.mailText} numberOfLines={1}>Google can use this phone number to contact you if you need help signing in or if we notice suspicious activity.</Text>
              </View>

              <View style={styles.dateTime}>
                <Text style={styles.mailDate}>8 July</Text>
                <Image source={require("./assets/star.png")} style={styles.refreshIcon} />
              </View>
            </View>
            

          </View>
        </View>


      </ScrollView>

      <View style={styles.footer}>
      <View style={styles.messageBox}>
        <Image source={require("./assets/message.png")} style={styles.messageIcon} />
        </View>
        <Image source={require("./assets/zoom.png")} style={styles.ZoomIcon} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",

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
    textAlign: "center",
    height: 40,
    backgroundColor: "#3C3E3F",
    placeholderTextColor: "white",
    opacity: 0.7,
    flex: 1,
    outlineStyle: 'none',
    color: 'white'
  },

  Primary: {
    color: "#B0AEAE",
    fontWeight: 500,
    fontSize: 10,
    fontFamily: 'sans-serif',
  },

  Primary2: {
    color: "#B0AEAE",
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
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",

  },

  headerBottom: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  hairLine: {
    borderBottomColor: "#B0AEAE",
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity: 0.5,
  },

  profile: {
    height: 25,
    width: 25,
    borderRadius: "50%",
  },

  menu: {
    height: 25,
    width: 25,
  },

  profileContainer: {
    backgroundColor: "#3C3E3F",
    height: 40,
    width: 40,
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.7,
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",

  },

  menuContainer: {
    backgroundColor: "#3C3E3F",
    height: 40,
    width: 40,
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.7,
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    paddingLeft: 15,
  },

  mail: {
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,

  },

  mailContent: {
    flex: 1,
    marginLeft: 20,

  },
  mailAuthor: {
    color: "#B0AEAE",
    fontWeight: 600,
    fontSize: 17,
    fontFamily: 'sans-serif',
  },
  mailHead: {
    color: "#B0AEAE",
    fontWeight: 500,
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
  mailText: {
    color: "#B0AEAE",
    fontWeight: 300,
    fontSize: 12,
    fontFamily: 'sans-serif',
  },
  dateTime: {
    justifyContent: "space-between",
    alignItems: "flex-end",

  },
  mailDate: {
    color: "#B0AEAE",
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
    marginLeft: 100
  },

  messageIcon: {
    height: 20,
    width: 24,
    marginTop:5,
    marginBottom:5, 
    marginRight: 20,
    marginLeft: 20, 
  },
  
  messageBox:{
  backgroundColor:'#0369A6',
  borderRadius:20,
  }
});
