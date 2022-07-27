
import * as React from 'react';
import { Auth } from 'aws-amplify';

import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  Pressable
} from 'react-native';

import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem.jsx';
import chatRoomsData from '../assets/dummy-data/ChatRooms';


// const chatRoom1 = chatRoomsData[0];
// const chatRoom2 = chatRoomsData[1];
// const chatRoom3 = chatRoomsData[2];

export default function TabOneScreen() {
  const logOut = () => {
    Auth.signOut();
  }

  return (

    <View style={styles.messagePage}>
      <FlatList

        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />} />

      <Pressable onPress={logOut}>
  <Text style={{backgroundColor: 'blue', color: "white"}}>LOG OUT</Text>
</Pressable>

    </View>

  )
}

const styles = StyleSheet.create({
  messagePage: {
    backgroundColor: 'white',
    flex: 1
  },
  
})

