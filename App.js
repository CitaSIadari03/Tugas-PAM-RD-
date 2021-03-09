
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Kelipatan from './component/Kelipatan';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hei Cita !!</Text>
      <Kelipatan/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    margin : '20 px'
  },
});
