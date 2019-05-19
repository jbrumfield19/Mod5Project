import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import {Facebook} from 'expo'
export default class FBLoginButton extends Component {
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
    return (
      <View>
        <Button onPress={logIn} title="Login"/>
      </View>
    );
  }
};

module.exports = FBLoginButton;