import firebase from 'firebase';

class Backend {
  uid = '';
  chatRef = null;
  // initialize Firebase Backend
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAI1DXOn_W76k7_Eeg_FxSfHawFjcbMbJE",
      authDomain: "helpchat-6e51a.firebaseapp.com",
      databaseURL: "https://helpchat-6e51a.firebaseio.com",
      projectId: "helpchat-6e51a",
      storageBucket: "helpchat-6e51a.appspot.com",
      messagingSenderId: "73629196543",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  // put user in the first chat
  setFirstChat(callback) {
    this.chatRef = firebase.database().ref('chats/room1/messages');
    this.chatRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.chatRef.limitToLast(20).on('child_added', onReceive);
  }
  // put user in the second chat
  setSecondChat(callback) {
  this.chatRef = firebase.database().ref('chats/room2/messages');
  this.chatRef.off();
  const onReceive = (data) => {
    const message = data.val();
    callback({
      _id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.user._id,
        name: message.user.name,
      },
    });
    };
  this.chatRef.limitToLast(20).on('child_added', onReceive);
  }

   // put user in the third chat
  setThirdChat(callback) {
  this.chatRef = firebase.database().ref('chats/room3/messages');
  this.chatRef.off();
  const onReceive = (data) => {
    const message = data.val();
    callback({
      _id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.user._id,
        name: message.user.name,
      },
    });
    };
  this.chatRef.limitToLast(20).on('child_added', onReceive);
  }

  // retrieve the messages from the Backend
  // loadMessages(callback) {
  //   this.messagesRef = firebase.database().ref('messages');
  //   this.messagesRef.off();
  //   const onReceive = (data) => {
  //     const message = data.val();
  //     callback({
  //       _id: data.key,
  //       text: message.text,
  //       createdAt: new Date(message.createdAt),
  //       user: {
  //         _id: message.user._id,
  //         name: message.user.name,
  //       },
  //     });
  //   };
  //   this.messagesRef.limitToLast(20).on('child_added', onReceive);
  // }

  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.chatRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.chatRef) {
      this.chatRef.off();
    }
  }
}

export default new Backend();
