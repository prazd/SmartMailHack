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
            <ScrollView style={{backgroundColor: 'white', padding: 70}}>
               <Text
                    style={styles.head}>
                    Что беспокоит тебя?
               </Text>
                <View style={styles.bigview}>
                    <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('DepressionScreen')} >
                    <Text style={styles.txt}>
                    Мир ужасен?    
                    </Text>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('BlackScreen')} >
                    <Text style={styles.txt}>
                    Тебя шантажируют?    
                    </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.but} onPress={() => this.props.navigation.navigate('SuicideScreen')} >
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
        fontFamily: 'Courier',
        fontWeight: 'normal',
        textAlign: "center",
    },
    bigview:{
        flex:1,
        alignItems: 'center',
        marginTop: 25,
    },
    but:{
        marginTop: 25,
        paddingTop: 15,
        alignItems: 'center',
        // backgroundColor: '#10FD8C',
        backgroundColor: '#FE6A0A',
        color: '#3a3a3a',
        borderRadius:6,
        height:50,
        width:270,
    },
    txt:{
        fontSize: 20,
        fontFamily: 'Georgia',
        fontWeight: 'normal',
        color: "black",
        textAlign: "center",
    },
})

