import React, { Component } from 'react';

import './App.css';
import Display from './Display'
import InputArea from './InputArea'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Array of strings with current open connections
      connections: ['id1', 'id 2'],
      // Object of active chats (Chat history array)
      chats: {
        1: [{type: 'incoming', message: 'hi counsellor'}],
        2: [{ type: 'incoming', message: 'help' }, { type: 'outgoing', message: 'whats wrong' }]
      },
      activeChatId: 2,
    }
  }
  // Function to pass down to input to send messages
  sendMessage = (message) => {
    // Implement socket sesnd here
    // this.socket.send(message)
    this.setState(prevState => {
      let newArr = [...prevState.chats[this.state.activeChatId], message]
      let state = {...prevState}
      state.chats[this.state.activeChatId] = newArr;
      return state;
    })
  }

  render() {
    console.log(this.state.chats[this.state.activeChatId]);

    return (
      <div className="App">
        <Display messages={this.state.chats[this.state.activeChatId]}/>
        <InputArea send={this.sendMessage}/>
      </div>
    );
  }
}

export default App;
