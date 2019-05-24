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
// import console = require('console');this.setState({friendInfo:info}
export default class FeedScreen extends React.Component{
    state={friendInfo:[]}
    componentDidMount(){
      fetch('http://10.185.1.156:3000/tumblr')
        .then(res => res.json())
        .then(friendInfo=> this.setState({friendInfo:friendInfo}))
        
        
    }
 render(){
    //  console.log(this.state)
     return(
         <View>
         {this.state.friendInfo.map(info=><FriendCard {...info}/>)}

         </View>
     )
 }
}