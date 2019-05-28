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
            //   backgroundColor: '#FEC1F2',
        
            },
          }); 
        return(
            <View style={styles.container}>
                <Image style={{width:25, height:25}}source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woozy-1553631153.jpg?crop=0.352xw:0.626xh;0.325xw,0.187xh&resize=480:*'}} />
                <Text>{this.props.name} {this.props.status>0? 'is doing good. Give them some love!':'needs to be checked on! Go talk, listen, and love them with open arms'}</Text>
             </View>
        )
    }
}