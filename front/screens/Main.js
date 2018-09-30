import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';
export class Main extends Component {
  render() {

    return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.buttonUpperContainer} 
        onPress={() => this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.customBtnText}>Помощь</Text>
        </TouchableOpacity>
        <View style={styles.buttonLowerContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('LoginScreen')}
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
   backgroundColor:'white'
  },
  buttonUpperContainer: {
    marginTop: 100,
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
export default Main;