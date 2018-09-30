import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  state = {
        name: ''
    };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {marginTop: 50}]}>
          Введите никнейм :
        </Text>
        <TextInput
          placeholder='Гость'
          style={styles.textInput}
          onChangeText={(value) => 
            this.setState({name: value})}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              value: this.state.name
            });
          }}
        >
        <Text style={styles.button}>
            Войти в анонимный чат
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  button: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 15,
    color : 'green',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
});
