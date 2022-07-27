import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// import Message from '../components/Message';

const myID = 'u1'

const blue = '#3271a8'
const grey = 'lightgrey'

const Message = ({ message }) => {

const isMe = message.user.id === myID;


  return (
    <View style={[
      styles.container, isMe ? styles.containerIsNotMe : styles.containerIsMe
      ]}>
      <Text style={[styles.text, {color: isMe ? 'black' : 'white'}]}>{message.content}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 9,
    margin: 9,
    borderRadius: 20,
    maxWidth: '78%',
    
  },  

  containerIsMe: {

    backgroundColor: blue,
    marginLeft: 10, 
    marginRight: 'auto',

  },

  containerIsNotMe:  {
    backgroundColor: grey ,
    marginLeft: 'auto',  
    marginRight: 10, 

  },

  text: {
      color: 'white'
    }

  })

export default Message;