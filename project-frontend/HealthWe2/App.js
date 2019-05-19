
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button,Alert} from 'react-native';
import {Facebook} from 'expo'


export default class App extends Component {
  state={
       fbInfo:[]
  }
  render() {
    async function logIn() {
      try {
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('418683202019231', {
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }
    console.log(this.state.fbInfo)
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to HealthWe!</Text>
        <Button onPress={logIn} title='link your facebook'></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

AppRegistry.registerComponent('App', () => App);
