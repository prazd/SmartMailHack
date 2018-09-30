import React, { Component } from 'react';
import axios from "axios";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Login extends Component {
    _moveToPersonView() {
        Alert.alert('Не правильный логин или пароль!')
    }
    Submit = async ()=> {
        axios.post('/login', {login:"onr",password:"pas" })
          .then((result) => this._moveToPersonView())}
    render() {
        return (
            <View>
                <Text 
                   style={styles.head}>
                    Войдите, чтобы начать помогать детям
                </Text>
                <TextInput placeholder='Логин' />
                <TextInput placeholder='Пароль' />
                <View style={styles.view}>
                <TouchableOpacity style={styles.but} onPress={()=>{}}><Text>
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
    fontFamily: 'Roboto',
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
