import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

const defaultUser = { name: 'Guest'};

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    if (this.props.value.length == 0){
      return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: defaultUser.name
        }}
      />
    );
    } else {
      return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.value
        }}
      />
    );
    }
  }
  componentDidMount() {
    // logic with routing to the the needed chat here. More info about func in Backend.js
    Backend.setSecondChat((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });

  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

