import React, { Component } from 'react';
import axios from "axios";
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Poscasts extends Component {
    render() {
        return (
            <ScrollView style={{padding: 70}}>
               <Text
                    style={styles.head}>
                    Что беспокоит тебя?
               </Text>
                <View style={styles.bigview}>

                <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('SuicideScreen')} >
                <Text style={styles.txt}>
                Мир ужасен?    
                </Text>
                
                </TouchableOpacity>
                <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('AlarmScreen')} >
                <Text style={styles.txt}>
                Тебе тревожно?    
                </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('DepressionScreen')} >
                <Text style={styles.txt}>
                Ты думаешь о смерти?    
                </Text>
                </TouchableOpacity>


                </View>
                </ScrollView>
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
    bigView:{
        flex: 1,
        alignItems: "center",
        backgroundColor:'white'
    },
    but:{
        alignItems: 'center',
        backgroundColor: '#10FD8C',
        padding: 10,
        borderRadius:6,
        height:50,
        width:270,
    },
    txt:{
        fontSize: 15,
        fontFamily: 'Courier',
        fontWeight: 'normal',
        color: "black",
        textAlign: "center",
    }
})

