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
import FriendCard from '../PageComponents/FriendCard'
export default class FeedScreen extends React.Component{
 render(){
     return(
         <FriendCard />
     )
 }
}