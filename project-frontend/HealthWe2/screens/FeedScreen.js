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
      fetch('http://10.185.0.255:3000/tumblr')
        .then(res => res.json())
        .then(friendInfo=> this.setState({friendInfo:friendInfo}))
        
        
    }
 render(){
    //  console.log(this.state)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      height:'100%'
    //   backgroundColor: '#FEC1F2',
    },
  }); 
     return(
    <ImageBackground source={{uri:'https://media2.giphy.com/media/3o7TKHijxCRJS3KOHe/200w.webp?cid=790b76115cef372036624c4951267d06&rid=200w.webp'}} style={styles.container}>
       <ScrollView >
       {this.state.friendInfo.map(info=><FriendCard {...info}/>)}

       </ScrollView>     
    </ImageBackground>
     )  
 }
}