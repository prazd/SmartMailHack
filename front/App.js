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
import Alarm from './screens/Alarm';
import Depression from './screens/Depression';

const AppNavigator = StackNavigator({
  SettingScreen:{screen:Main},
  HomeScreen:{screen:Off_on},
  LoginScreen:{screen:Login},
  PodcastsScreen:{screen:Podcasts},
  SuicideScreen:{screen:Suicide},
  AlarmScreen:{screen:Alarm},
  DepressionScreen:{screen:Depression}
});


export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
