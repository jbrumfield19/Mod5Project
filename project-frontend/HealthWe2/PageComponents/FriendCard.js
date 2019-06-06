import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
export default class FriendCard extends React.Component{
    render(){

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              borderWidth:.25,
              borderColor:'#40e0d0'  
            
            },
          }); 
        return(
            <View style={styles.container}>
               
                <Text> <Image style={{width:25, height:25}}source={{uri:'https://i.pinimg.com/236x/e1/a7/b6/e1a7b6048ebf26655cc593a2b415b812.jpg'}} />     {this.props.name}</Text>
                <Text >{this.props.status>0? 'is doing good. Give them some love!':'needs to be checked on! Go talk, listen, and love them with open arms'}</Text>
             </View>
        )
    }
}