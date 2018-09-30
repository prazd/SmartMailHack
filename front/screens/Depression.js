import React, { Component } from 'react';
import axios from "axios";
import {
    ScrollView,
    Text,
} from 'react-native';

export default class Depression extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Депрессия
                </Text>
                  </ScrollView>
            )
    }
}
