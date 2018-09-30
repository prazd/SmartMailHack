import React, { Component } from 'react';
import axios from "axios";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Alarm extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Тревога
                </Text>
                  </ScrollView>
            )
    }
}
