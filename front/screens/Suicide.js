import React, { Component } from 'react';
import axios from "axios";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Suicide extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Суицид : У каждого человека возникают такие трудные ситуации, когда им очень тяжело, и кажется, что выхода нет и опускаются руки.Но всегда даже самая трудная ситуация временная и её всегда можно преодолеть. О своей проблеме можно рассказать и это не стыдно. Ты не один и есть люди, которые обязательно смогут помочь в твоей ситуации. Обратись за помощью к родителям, друзьям, тем, кому доверяешь или позвони по телефону доверия +7(800)900-22-11. 
                </Text>
                  </ScrollView>
            )
    }
}
