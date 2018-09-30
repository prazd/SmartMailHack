import React, { Component } from 'react';
import axios from "axios";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert
} from 'react-native';

export default class Poscasts extends Component {
    render() {
        return (
            <ScrollView style={{padding: 70}}>
               <Text
                    style={{fontSize: 27}}>
                    Что у тебя произошло?
               </Text>
                <View style={{margin:7}}/>  
                <Button  backgroundColor='#3fffff' onPress={() => this.props.navigation.navigate('SuicideScreen')} title="Мир ужасен?"/>
                <View style={{margin:7}}/>  
                <Button onPress={() => this.props.navigation.navigate('AlarmScreen')} title="Тревога"/>
                <View style={{margin:7}}/>  
                <Button onPress={() => this.props.navigation.navigate('DepressionScreen')} title="Ты думаешь о смерти?"/>
                </ScrollView>
            )
    }
}
