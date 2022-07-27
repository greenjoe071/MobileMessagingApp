import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable,
    Platform,
    KeyboardAvoidingView,
 } from 'react-native';

import { Ionicons, 
    AntDesign,
    FontAwesome,
    FontAwesome5,
} from '@expo/vector-icons';
import React,{useState} from 'react'


const MessageInput = () => {

const [message, setMessage] = useState("");

const sendMessage = () => {
    console.warn("sending: ", message);
    setMessage("")
}

const onPlusClicked = () => {
    alert("you pressed the + button")
}

const onPress = () => {
    if (message) {
        sendMessage();
    } else {
        onPlusClicked();
    }
}


    return (
       
        <KeyboardAvoidingView 
        style={styles.root}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        >

            <View style={styles.inputContainer} >
                <FontAwesome5 style={styles.icon} name="smile-wink"
                    size={24}
                    color="grey" />

                <TextInput style={styles.input}
                    placeholder="New Message..."
                    value={message}
                    onChangeText={setMessage}
                />

                {message ? <Ionicons style={styles.noDisplay} /> : <Ionicons style={styles.icon} name="ios-camera" size={24} color="grey" />}


                {message ? <FontAwesome style={styles.noDisplay} name="microphone" size={24} color="grey" /> : <FontAwesome style={styles.icon} name="microphone" size={24} color="grey" />}


            </View>
            <Pressable
                onPress={onPress}
                style={styles.buttonContainer} >
                {message ? <FontAwesome5 name="arrow-up" size={20} color="white" /> :

                    <AntDesign name="plus" size={17} color="white" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
root: {
    flexDirection: 'row',
    padding: 10,
},
inputContainer: {
    backgroundColor: '#f2f2f2',
    flex:1,
    marginRight: 10,
    borderRadius: 33,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dedede',
    flexDirection: 'row',
    padding: 7,
},
buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor:"#3777f0",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    
},


buttonText: {
    color: 'white',
    fontSize: 30,
},
icon: {
    marginHorizontal: 5,
},
input: {
  flex: 1,
  marginHorizontal: 3,
  
},
noDisplay: {
    display:"none",
}


})

export default MessageInput