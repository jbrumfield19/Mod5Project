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

export default class FriendCard extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.name} is {this.props.status>0? 'doing good. Give them some love!':'needs to be checked on, talk, listen, and love with open arms'}</Text>
             </View>
        )
    }
}