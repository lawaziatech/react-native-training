import * as React from 'react';
import {
  View, 
  Text,
  Image,
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
export default App;
function HomeScreen({ navigation, route }) { 
  const handleClick = () => {
    navigation.navigate('Setting');
  };
  const Click1 = () => {
    navigation.navigate('Mail1');
  };
  const Click2 = () => {
    navigation.navigate('Mail2');
  };
  const Click3 = () => {
    navigation.navigate('Mail3');
  };
  const Click4 = () => {
    navigation.navigate('Mail4');
  };
  const Click5 = () => {
    navigation.navigate('Mail5');
  };

  const mail = (props) => {};
  return (
    <View style={{ backgroundColor: 'black' }}>
      <View style={style.view8}></View>
      <View style={style.view7}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleClick}>
              <Image
                style={style.img9}
                source={require('./assets/menu (2).png')}
              />
            </TouchableOpacity>
            <Text style={style.img10}>Search in mail</Text>
            <Image style={style.img11} source={require('./assets/girl (1).png')} />
          </View>
        </View>
      </View>
      <Text style={style.text15}>Primary</Text>
      <View>
        <TouchableOpacity style={{ borderRadius: 20 }} onPress={Click1}>
          <View style={style.view1}>
            <Image style={style.img1} source={require('./assets/letter-n (3).png')} />
            <View>
              <Text style={{fontWeight:"bold",fontSize:16,color:'white'}}>Nykaa</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 13 ,color:'white'}}>
               Going back to college...............................??      
              </Text>
              <Text style={{ fontSize: 13,color:'white'}}>
             We have affordable skincare up for....
              </Text>
            </View>
            <View style={{}}>
              <Text style={{ fontWeight: 'bold',color:'white' }}>Jun 23</Text>
              <Image
                style={style.img2}
                source={require('./assets/star (3).png')}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderRadius: 20 }} onPress={Click2}>
          <View style={style.view1}>
            <Image style={style.img1} source={require('./assets/letter-g (2).png')} />
            <View>
              <Text style={{fontWeight:"bold",fontSize:16,color:'white' }}>Google</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 13,color:'white'}}>
                Help strengthen the security of you
              </Text>
              <Text style={{ fontSize: 13,color:'white' }}>
              Add ways for us to make sure that it...............
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold',color:'white' }}>Jun 20</Text>
              <Image
                style={style.img2}
                source={require('./assets/star (3).png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 20 }} onPress={Click3}>
          <View style={style.view1}>
            <Image style={style.img1} source={require('./assets/letter-e.png')} />
            <View>
              <Text style={{fontWeight:"bold",fontSize:16,color:'white'}}>Expo Support</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 13,color:'white' }}>
               Welcome to Expo!
              </Text>
              <Text style={{ fontSize: 13,color:'white' }}>
               Welcome to Expo! First  thing first:....................
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' ,color:"white"}}>Jun 10</Text>
              <Image
                style={style.img2}
                source={require('./assets/star (3).png')}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderRadius: 20 }} onPress={Click4}>
          <View style={style.view1}>
            <Image style={style.img1} source={require('./assets/instagram (2).png')} />
            <View style={{}}>
              <Text style={{fontWeight:"bold",fontSize:16,color:'white' }}>
                Instagram
              </Text>

              <Text style={{ fontWeight: 'bold', fontSize: 13,color:'white' }}>
               678064 is your Instagram code
              </Text>
              <Text style={{ fontSize: 13,color:'white' }}>
                Hi, Someone tried to sign up for an..................
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold',color:'white' }}>Jun 8</Text>
              <Image
                style={style.img2}
                source={require('./assets/star (3).png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 20 }} onPress={Click5}>
          <View style={style.view1}>
            <Image style={style.img1} source={require('./assets/y (2).png')} />
            <View>
              <Text style={{ fontWeight:"bold",fontSize:16,color:'white'}}>YouTube</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 13 ,color:'white'}}>
               You can now choose your YouTube
              </Text>
              <Text style={{ fontSize: 13 ,color:'white'}}>
               YouTube Creator YouTube is introdu is ............
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold',color:"white" }}>Jun 5</Text>
              <Image
                style={style.img2}
                source={require('./assets/star (3).png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Setting() {
  return (
    <View style={style.view2}>
      <Text style={style.text1}> Gmail</Text>
      <Text style={style.text1}>All inboxes</Text>
      <Text style={style.text1}>Primary</Text>
      <Text style={style.text1}>Promotions</Text>
      <Text style={style.text1}>Social</Text> 
    </View>
  );
}

function Mail1() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <Text style={style.text7}>
        Going back to college...??
        <Text style={style.text3}>Inbox</Text>
      </Text>

      <View>
        <View style={style.view4}>
        <Image style={style.img5} source={require('./assets/letter-n (3).png')} />

          <View style={{ flexDirection: 'column' }}>
            <Text style={style.txet6}>Nykaa<Text style={style.text9}> 6 days ago</Text>
            </Text>
            <Text style={{ marginLeft: 25,color:'white' }}>to me </Text>
          
            <Image style={style.img3} source={require('./assets/download (5).jfif')} />
             <Image style={style.img3} source={require('./assets/download (2).jfif')} />
          </View>
        </View>
        <View>
          <Text style={style.text8}>Hello dear,</Text>
          <Text style={{ marginTop: 20,color:"white",fontWeight:"bold" }}>DOWNLOAD  THE APP
          </Text>
          <Text style={{ marginTop: 5,color:"white",margin:10 }}>get it on
          </Text>
          <Text style={{color:"white",}}>Google Play
          </Text>
          <Text style={{color:"white",margin:10 }}>DOWNLOAD on the 
          </Text>
          <Text style={{color:"white" ,}}>App Store
          </Text>
          <Text style={{color:"white",margin:30 }}>Manage Your mailing preferences</Text>
          <Text style={style.text5}>    Reply     Reply all   Forward</Text>
        </View>
      </View>
    </View>
  );
}


function Mail2() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <Text style={style.text18}>
       Help strengthen the security of your Google Account
        <Text style={style.text3}>Inbox</Text>
      </Text>
      <View style={style.view4}>
        <Image style={style.img6} source={require('./assets/letter-g (2).png')} />
        <Text style={style.text18}>Google </Text>
        <Text style={style.text19}>10 days ago</Text>
      </View>
      <Text style={{ marginLeft: 63, color: 'white' }}>to me </Text>
      <View style={{ flexDirection: 'row',margin:20 }}>
          <Image style={style.img8} source={require('./assets/google.png')} />
        
        </View>

      <Text style={style.text13}>Users with extra ways to verify their identity are far less likely to be hacked or locked out.</Text>
        <Text style={style.text13}>Add additional ways to prove  that it's really you and see other personalised security recommendations in the
       </Text>
      <Text style={style.text13}> Security Checkup.</ Text>
      <Text style={style.text5}>    Reply     Reply all   Forward</Text>
    </View>
  );
}

function Mail3() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <Text style={style.text7}>
        Welcome to Expo!
        <Text style={style.text3}>Inbox</Text>
      </Text>
      <View>
        <View style={style.view4}>
          <Image style={style.img5} source={require('./assets/letter-e.png')} />

          <View style={{ flexDirection: 'column' }}>
            <Text style={style.txet6}>Expo Support<Text style={style.text11}> 19 days ago</Text>
            </Text>
            <Text style={{ marginLeft: 25,color:'white' }}>to me </Text>
          </View>
        </View>
        <View style={{}}>
         <Image style={{margin:20}} source={require('./assets/images.png')} />

          <Text style={{fontSize:30,color:'white',margin:30}}>Welcome to Expo!</Text>
          <Text style={{ marginTop: 10,color: 'white' }}>First things first:verify your email.</Text>
          <Text style={{ marginTop: 20,color: 'white' }}>
           here's how to get started:
          </Text>
          <Text style={{color:'white'}}>* Get started developing with our Get started guide.</Text>
          <Text style={{color:'white'}}>*Sign up for Office Hours to get the most out of expo.</Text>
            <Text style={{color:'white'}}>*Join the Expo community on discord.</Text> 
              <Text style={{color:'white'}}>*Discord what's new with Expo on our blog.</Text>
              <Text style={{color:"white",margin:30 }}>Manage Your mailing preferences</Text>
          <Text style={style.text5}>    Reply     Reply all   Forward</Text>
          </View>
       
      </View>
    </View>
  );
}
function Mail4() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <Text style={style.text7}>
        678064 is your Instagram code
        <Text style={style.text3}>Inbox</Text>
      </Text>
      <View>
        <View style={style.view5}>
          <Image style={style.img6} source={require('./assets/instagram (2).png')} />

          <View>
            <Text style={style.txet6}>
              Instagram <Text style={style.text11}>15 days ago</Text>
            </Text>
            <Text style={{ marginLeft: 25,color:"white" }}>to me </Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{fontSize:22,color:"white",margin:20}}>Hi, </Text>
          <Text style={style.text17}>
          Someone tried to sign up for an instagram account with riyamuskann31003@gmail.com.If it was you, enter this confirmation code in the app:
          </Text>
          <Text style={{fontWeight:'bold',color:'white',margin:20,fontSize:30}}>678064</Text>
          <Text style={{margin:20,color:'white'}}>
          @Instagram. Meta platform,Inc.,1601 Willow 
          <Text style={{color:'white'}}>Road , Menlo park, CA 89353</Text>
          <Text style={{color:'white'}}>This message was sent to </Text>
          <Text style={{color:'white'}}>riyamuskann31003@gamil.com</Text>
          </Text>
            <Text style={{color:"white",margin:30 }}>Manage Your mailing preferences</Text>
          <Text style={style.text5}>    Reply     Reply all   Forward</Text>
        </View>
      </View>
    </View>
  );
}
function Mail5() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <Text style={style.text7}>
      You can now choose your YouTube
        <Text style={style.text3}>Inbox</Text>
      </Text>
      <View>
        <View style={style.view4}>
        <Image style={style.img6} source={require('./assets/y (2).png')} />
        <View style={{flexDirection:"column"}}>
          <Text style={style.txet6}>YouTube <Text style={style.text11}>yesterday</Text>
          </Text>
          <Text style={{ marginLeft: 28 ,color:"white" }}>to me</Text>
        </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image style={style.img8} source={require('./assets/youtube.jfif')} />
        
        </View>
        <View style={{ flexDirection: 'column', marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold',color:"white",margin:10 }}>Hi Nailart_rm,</Text>
          <Text style={{ marginTop: 20,color:"white",margin:10 }}>
          You can now choose your channel's handle.
          </Text>
        </View>
        <View style={{marginTop:20,color:"white"}}>
        <Text style={{color:"white",margin:10}}>As a reminder,in most cases, if you already have a personalised URL for your channel, we've reserved this for your handle. If you're happy with that handle then you're all set. If you want a different handle from the one that we reserved, you can change it. If you don't already have a personalised URL today, you'll also be able to choose a handle. keep in mind that handles are unique to each channel, so once a handle has been chosen,it can't be selected by anyone else.</Text>
        <Text style={style.text13}> Security Checkup.</ Text>
      <Text style={style.text5}>    Reply     Reply all   Forward</Text>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Mail1" component={Mail1} />
        <Stack.Screen name="Mail2" component={Mail2} />
        <Stack.Screen name="Mail3" component={Mail3} />
        <Stack.Screen name="Mail4" component={Mail4} />
        <Stack.Screen name="Mail5" component={Mail5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  img1: {
    height: 45,
    width: 45,
    borderRadius: 30,
    margin:7,
  },
  img2: {
    height: 20,
    width: 20,
    borderRadius: 70,
    top: 13,
    bottom: 0,
    left:0,
  },
  text1: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text2: {
    fontWeight: 'bold',
  },
  text3: {
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'grey',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 20,
  },
  text4: {
    marginTop: 5,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text5: {
    marginTop: 70,
    fontSize:22,
    color: 'white',
  },
  txet6: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    color: 'white'
  },
  text10: {
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 25,
    marginTop: 20,
    color:"white" 
  },
  view2: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor:"grey"
  },
  view3: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  text7: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin:10,
  },
  text8: {
    fontWeight: 'bold',
    marginTop: 30,
    color:"white",
    margin:10,
  },
  img3: {
    height: 230,
    width: 300,
    marginTop: 20,
   // marginLeft: 5,
   margin:10
  },
  img4: {
    height: 50,
    width: 200,
    marginTop: 25,
    marginLeft: 20,
  },
  text9: {
    fontSize: 13,
    fontWeight: 60,
  },
  img5: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  img6: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  view4: {
    marginTop: 40,
    flexDirection: 'row',
    marginLeft: 10,
    margin:10,
  },
  text11: {
    fontSize: 13,
    fontWeight: 60,
    color: 'white'
  },
  view5: {
    marginTop: 39,
    flexDirection: 'row',
    marginLeft: 10,
  },
  text12: {
    fontWeight: 'bold',
    marginTop: 30,
    color: 'white'
  },
  img7: {
    height: 40,
    width: 150,
    marginLeft: 30,
    marginTop: 30,
  },
  img8: {
    height: 140,
    width: 300,
    marginTop: 30,
    margin:10,
    
  },
  text14: {
    marginLeft: 50,
    fontWeight: 'bold',
    fontSize: 17,
  },
  view6: {
    marginTop: 39,
    flexDirection: 'row',
    marginLeft: 10,
  },
  view7: {
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 10,
    backgroundColor: 'pink',
    borderRadius: 50,
    height: 35,
  },
  img9: {
    height: 30,
    width: 30,
    marginTop: 3,
    marginLeft: 2,
    borderRadius: 30,
    borderColor: '#F2B6A0',
    borderWidth: 2,
  },
  img10: {
    marginLeft: 16,
    marginRight: 140,
    marginTop: 7,
    fontSize: 15,
    fontWeight: 'bold',
  },
  img11: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  view8: {
    flexDirection: 'row-reverse',
    marginTop: 10,
  
  },
  text15: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  text16: {
    marginTop: 20,
    color:"white" 
  },
  text17: {
    marginTop: 20,
    fontSize: 20,
    color:"white",
    margin:10,
  },
  text18: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text19: {
    fontSize: 13,
    fontWeight: 60,
    color: 'white',
  },
  text13: {
    marginTop: 30,
    color: 'white',
    margin:10,
  },
});