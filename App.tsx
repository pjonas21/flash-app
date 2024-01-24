import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import symbolFlash from './assets/pictures/the-flash.png';
import symbolReverseFlash from './assets/pictures/the-reverse-flash.png';

export default function App() {
  const [activeState, setActiveState] = useState(false)

  function handleSymbol() {
    setActiveState((oldValue:boolean) => {
      return !oldValue
    })
  }

  return (
    <View style={activeState ? styles.containerReverse : styles.container}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image style={styles.imageCenter} source={activeState ? symbolReverseFlash : symbolFlash} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a30512",
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerReverse: {
    flex: 1,
    backgroundColor: '#dbc204',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black'
  },
  imageCenter: {
    width: 300,
    height: 400
  }
});
