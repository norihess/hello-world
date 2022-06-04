import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <View style ={ styles.box1}></View>
        <View style ={ styles.box2}></View>
        <View style ={ styles.box3}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },

  box1: {
    flex: 33,
    backgroundColor: 'red',
  },

  box2: {
    flex: 33,
    backgroundColor: 'grey',
  },
  
  box3: {
    flex: 33,
    backgroundColor: 'blue',
  },
});

