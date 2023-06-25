import * as react from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';


const MailItem = ({ item, navigation }) => (
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
                {item.content}
            </Text>
        </View>

        <View style={styles.dateTime}>
            <Text style={styles.mailDate}>{item.date}</Text>
            <Image source={item.star} style={styles.refreshIcon} />
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
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
    refreshIcon: {
        height: 15,
        width: 15,
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


export default MailItem;