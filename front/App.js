import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './screens/Main';
import Off_on from './screens/Off_on';
import Login  from './screens/Login';
import Podcasts from './screens/Podcasts';
import Suicide from './screens/Suicide';
import Blackmail from './screens/Blackmail';
import Depression from './screens/Depression';
import StartChat from './screens/StartChat'

const AppNavigator = StackNavigator({
  SettingScreen:{screen:Main},
  HomeScreen:{screen:Off_on},
  LoginScreen:{screen:Login},
  PodcastsScreen:{screen:Podcasts},
  SuicideScreen:{screen:Suicide},
  BlackScreen:{screen:Blackmail},
  DepressionScreen:{screen:Depression},
  StartChatScreen:{screen:StartChat}
});


export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
