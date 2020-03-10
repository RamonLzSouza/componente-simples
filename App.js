import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Simples from './src/Simples'

export default class App extends Component{
  render(){
    return (
     <View>
      <Text> Olá Mundooooooo ! </Text>
      <Simples/>
    </View>
    );
  }
}