import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';

export class Off_on extends Component {
  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonUpperContainer}>
        <Text style={styles.customBtnText}>Онлайн</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLowerContainer} onPress={() => this.props.navigation.navigate('PodcastsScreen')}>
        <Text style={styles.customBtnText} >Оффлайн</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: "center",
    },
    buttonUpperContainer: {
      marginTop: 40,
      borderWidth: 1,
      borderColor: 'rgba(253, 197, 150 ,0.1)',
      alignContent:'center',
      justifyContent:'center',
      width: 200,
      height: 200,
      backgroundColor:'rgba(23, 235, 55, 1);',
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
    buttonLowerContainer: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'rgba(253, 197, 150 ,0.1)',
        alignContent:'center',
        justifyContent:'center',
        width: 200,
        height: 200,
        backgroundColor:'rgba(235, 23, 23, 1);',
        borderRadius: 100,
      },
  });

export default Off_on