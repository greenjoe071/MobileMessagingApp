import * as React from 'react';
import styles from './styles';

import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
} from 'react-native';


export default function ChatRoomItem({ chatRoom }) {
   const user = chatRoom.users[1];

   const navigation = useNavigation(); 
    

   const onPress = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id});
  };


//    const onPress = () => {
//     navigation.navigate('ChatRoom');
//    }
   


    
    return (
        <Pressable style={styles.container}
        onPress={onPress}>
            <Image source={{ uri: user.imageUri }} style={styles.image} />
            
            {chatRoom.newMessages ? <View style={styles.badgeContainer} >
                <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
            </View> : null}
            
            <View style={styles.childcontainer}>
                <View style={styles.row}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="middle" style={styles.text}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
        </Pressable>
    );
}

