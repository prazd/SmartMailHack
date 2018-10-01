import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';
export class Main extends Component {

  async internetCheck() {
    try {
      let response = await fetch(
        'http://142.93.71.221:8080/check', {
            method: 'GET',
          });
      let responseJson = await response.json();
      if (responseJson.message == "nice"){
        this.props.navigation.navigate('StartChatScreen')
      } 
    } catch (error) {
      this.props.navigation.navigate('PodcastsScreen') 
    }
  }
  render() {

    return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.buttonUpperContainer} 
        onPress={() => this.internetCheck()}>
        <Text style={styles.customBtnText}>Помощь</Text>
        </TouchableOpacity>
        <View style={styles.buttonLowerContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('LoginScreen')}
            title="Войти как психолог"
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
    backgroundColor:'rgba(253, 197, 150 ,1)',
    borderRadius: 100,
  },
  buttonLowerContainer: {
    marginTop: 175,
    backgroundColor: "gray",
    borderRadius: 50,
    width: 200,
    height: 60,
    alignContent:'center',
    justifyContent:'center',
  },
  customBtnText: {
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: 'normal',
    color: "black",
    textAlign: "center",
  },
  lowerBtnText: {
    color: "rgba(253, 197, 150 ,1)",
    textAlign: 'center',
    paddingBottom: 27,
    fontSize: 18,
  }
});
export default Main;