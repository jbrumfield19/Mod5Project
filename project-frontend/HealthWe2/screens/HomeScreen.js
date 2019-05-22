import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import {withNavigation} from 'react-navigation'
import  { Linking, WebBrowser } from 'expo';
import {tumblr}from 'react-native-simple-auth'
import { MonoText } from '../components/StyledText';
import{AuthSession} from 'expo'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title:'HealthWe',
  };
  state={
    fbInfo:[],
    fbName:''
}
logIn = async () => {
  try {
    const {navigate}=this.props.navigation

    // simpleAuthProviders['tumblr'](opts)
    //   .then((info) => {
    //     _this.setState({
    //         loading: false
    //     });
    //     _this.props.navigator.push({
    //       title: provider,
    //       provider,
    //       info,
    //       index: 1
    //     });
    //   })
    //   .catch((error) => {
    //     _this.setState({
    //         loading: false
    //     });
    //     Alert.alert(
    //       'Authorize Error',
    //       error.message
    //     );
    //   });

    // console.log("im sorry what")
    // let redirectUrl = AuthSession.getRedirectUrl();
    // let result = await AuthSession.startAsync({
    //   authUrl:
    //     `https://www.tumblr.com/oauth/access_token` +
    //     `&client_id=fMSKqonfriPsME1WQ7mwDi0Qqq1hYXv6I7uXmbcnG8hrixqExd` +
    //     `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    // });
    // console.log(result)
    const result = await tumblr({
      appId: 'fMSKqonfriPsME1WQ7mwDi0Qqq1hYXv6I7uXmbcnG8hrixqExd',
      appSecret: 'NGt2IifxB33JaCQ7KuaEiYoA3lqXh4mQ4bVeyO5JqWkI59RZec',
      callback: Linking.makeUrl('authorization'),
    });
    console.log(result.credentials) // oauth_token, oauth_token_secret
    try{
      // fetch(`api.tumblr.com/v2/user?api_key=fMSKqonfriPsME1WQ7mwDi0Qqq1hYXv6I7uXmbcnG8hrixqExd`)
      //   .catch(console.log)
    } catch(err){
      console.log(err)
    }
    // if (type === 'success') {
    //   // Get the user's name using Facebook's Graph API
    //   const response = 
    //   console.log(response.json())
    //   // const {name, posts} = await response.json();
    //    Alert.alert('Logged in!', `Hi ${name}!`);
    //   this.props.navigation.navigate('Feed',)
     
    // } else {
    //   // type === 'cancel'
    // }
  } catch (message ) {
    console.log(message);
  }
}
render() {

// console.log(this.state)
 return (
   <View style={styles.container}>
     <Text style={styles.label}>Welcome to HealthWe!</Text>
     <Button onPress={this.logIn} title='link your tumblr'></Button>
         
   </View>
 );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
