import React, { Component } from 'react';
import {
    Text,
    Alert,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Login extends Component {

    state = {
        login: '',
        password: ''
    };

    _moveToPersonView() {
        Alert.alert('Успешно!');
        this.props.navigation.navigate('StartChatScreen')
    }
  
    async signIn() {
        try {
          let response = await fetch(
            'http://localhost:8080/in', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  login: this.state.login,
                  password: this.state.password,
                }),
              });
          let responseJson = await response.json();
          if (responseJson.resp == "nice"){
            this._moveToPersonView()
          }
        } catch (error) {
          console.error(error);
        }
      }

    render() {
        return (
            <View>
                <Text 
                   style={styles.head}>
                    Войдите, чтобы начать помогать детям
                </Text>
                <TextInput placeholder='Логин'
                onChangeText={(value) => 
                    this.setState({login: value})}
                  value={this.state.login} />
                <TextInput placeholder='Пароль'
                onChangeText={(value) => 
                    this.setState({password: value})}
                  value={this.state.password} />
                <View style={styles.view}>
                <TouchableOpacity style={styles.but} onPress={()=>{
                    this.signIn()
                }}><Text>
                    Войти
                </Text>
                </TouchableOpacity>
                </View>
                  </View>
            )
    }
}

const styles = StyleSheet.create({
    head:{
    fontSize: 21,
    fontFamily: 'Courier',
    fontWeight: 'normal',
    textAlign: "center",
    },
    but:{
        alignItems: 'center',
        backgroundColor: '#10FD8C',
        padding: 10,
        borderRadius:6,
        height:50,
        width:270,
    },
    view:{
        flex: 1,
        alignItems: "center",
        backgroundColor:'white'
    }
})
