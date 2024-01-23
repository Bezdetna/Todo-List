import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';

import Header from './components/Header'
import ListItem from './components/ListItem';
import Form from './components/Form';



export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Go to the store', key: '1' },
    { text: 'Wash car', key: '2' },
    { text: 'Pick up the cat', key: '3' },
    { text: 'Set up automatic transfer', key: '4' },

  ]);

  const addHandlerText = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random.toString(36).substring(7) },
        ...list
      ]
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form addHandler={addHandlerText} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },


});
