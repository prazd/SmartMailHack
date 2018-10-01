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
                    Депрессия: Жаль, что ты в таком раннем возрасте столкнулся с депрессией. Но ты не думай, что проходишь через это один. Поделись своими мыслями с людьми, которые тебе дороги, они смогут поддержать тебя. Не бойся обратиться к психологу, лечение поможет тебе быстрее излечить свое сознание.
                </Text>
                  </ScrollView>
            )
    }
}
