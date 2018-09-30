import React, { Component } from 'react';
import axios from "axios";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
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
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Вход
                </Text>
                <TextInput placeholder='Логин' />
                <TextInput placeholder='Пароль' />
                <View style={{margin:7}} />
                <Button onPress={onPress=this.Submit.bind(this)} title="Войти"/>
                  </ScrollView>
            )
    }
}
