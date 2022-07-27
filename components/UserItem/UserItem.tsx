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
import { ChatRoom, User } from '../../src/models';
import { Auth, DataStore, ChatRoomUser } from 'aws-amplify';


export default function UserItem({ user }) {
   
   const navigation = useNavigation(); 

   const onPress = async () => {
    //make a chat space for Authenticated user -> clicked user

// maake the new chat room with no messages
    const newChatRoom = await DataStore.save(new ChatRoom({newMessages: 0}))

//make the connection from auth user to clicked user
    const authUser = await Auth.currentAuthenticatedUser();
    const dbUser = await DataStore.query(User, authUser.attributes.sub)
    await DataStore.save(new ChatRoomUser ({
        user: dbUser,
        Chatroom: newChatRoom
    }))

//connect the clicked user the newly created chatroom
    await DataStore.save(new ChatRoomUser ({
        user: user,
        Chatroom: newChatRoom
}));

navigation.navigate("ChatRoom", { id: newChatRoom.id });

  };

    return (
        <Pressable style={styles.container}
            onPress={onPress}>
            <Image source={{ uri: user.imageUri }} style={styles.image} />

            <View style={styles.childcontainer}>
                <View style={styles.row}>
                    <Text style={styles.username}>{user.name}</Text>

                </View>
            </View>
        </Pressable>
    );
}

