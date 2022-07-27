import React from 'react';
import { useRoute, useNavigation } from "@react-navigation/core";

import {
    Text,
    StyleSheet,
    Image,
    View,
    FlatList,
    TextInput,
    SafeAreaView
  } from 'react-native';


  import Message from '../components/Message';
  import chats from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen () {
    const route = useRoute();
    const navigation = useNavigation();
    console.warn("diplaying chat room: ", route.params?.id)

    navigation.setOptions({title: "Joe Green"})


    return (
        <SafeAreaView style={styles.page}>
            <FlatList 
                data={chats.messages}
                renderItem={( {item} ) => <Message message={item} />
                 } 
                //  inverted
            />
       <MessageInput />
        </SafeAreaView>

    )
};

const styles = StyleSheet.create ({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
}

)
