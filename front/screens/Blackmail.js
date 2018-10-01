import React, { Component } from 'react';
import {
    ScrollView,
    Text,
} from 'react-native';

export default class Blackmail extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Шантаж: Не бойся обратиться за помощью к родителям и в полицию. Не бойся рассказать об этом, это не стыдно. Злодей должен быть наказан, он совершает преступление. Не стыдно рассказать о своей проблеме, ты не одинок и тебе помогут.
                </Text>
                  </ScrollView>
            )
    }
}
