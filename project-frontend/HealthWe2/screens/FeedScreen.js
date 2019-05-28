import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import FriendCard from '../PageComponents/FriendCard'
// import console = require('console');this.setState({friendInfo:info}
export default class FeedScreen extends React.Component{
    state={friendInfo:[]}
    componentDidMount(){
      fetch('http://10.185.4.71:3000/tumblr')
        .then(res => res.json())
        .then(friendInfo=> this.setState({friendInfo:friendInfo}))
        
        
    }
 render(){
    //  console.log(this.state)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#FEC1F2',
    },
  }); 
     return(
    <ImageBackground source={{uri:'https://i.pinimg.com/originals/4a/4f/db/4a4fdbafb9fcf7bb691ac7216f26384d.jpg'}} style={styles.container}>
       <ScrollView >
       {this.state.friendInfo.map(info=><FriendCard {...info}/>)}

       </ScrollView>     
    </ImageBackground>
     )  
 }
}