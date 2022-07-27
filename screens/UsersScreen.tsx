
import React, { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';

import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  Pressable
} from 'react-native';

import UserItem from '../components/UserItem';
import Users from '../assets/dummy-data/Users';
import { User } from '../src/models';


export default function UsersScreen() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, [])

  // useEffect(() => {

  //   const fetchUsers =async () => {
  //     const fetchedUsers = await DataStore.query(User);
  //     setUsers(fetchedUsers);
  //   };
  //   fetchUsers();

  // }, [])

  return (

    <View style={styles.messagePage}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />} />

    </View>

  )
}

const styles = StyleSheet.create({
  messagePage: {
    backgroundColor: 'white',
    flex: 1
  },
  
})

