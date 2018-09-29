/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Alert, Button, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


type Props = {};
export default class App extends Component<Props> {
  _moveToPersonView() {
    Alert.alert('You tapped the button!')
  }
  render() {

    return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.buttonUpperContainer} onPress={()=> {
          this._moveToPersonView();
          }
        }>
        <Text style={styles.customBtnText}>Помощь</Text>
        </TouchableOpacity>
        <View style={styles.buttonLowerContainer}>
          <Button
            onPress = {this._moveToPersonView}
            title="Вход для психолога"
            color="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: "center",
  },
  buttonUpperContainer: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: 'rgba(253, 197, 150 ,0.1)',
    alignContent:'center',
    justifyContent:'center',
    width: 200,
    height: 200,
    backgroundColor:'rgba(253, 197, 150 ,0.6)',
    borderRadius: 100,
  },
  buttonLowerContainer: {
    marginTop: 150,
    color: 'black',
  },
  customBtnText: {
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: 'normal',
    color: "black",
    textAlign: "center",
  },
});
