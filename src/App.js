import React, { Component } from 'react';

import './App.css';
import Display from './Display'
import InputArea from './InputArea'
import ChatSelector from './ChatSelector'

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
  changeChat = (id) => () => {
    this.setState({activeChatId: id})
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
        <h3>Click on chat ID to change Chat</h3>
        <ChatSelector ids={Object.keys(this.state.chats)} selectChat={this.changeChat} />
        <Display messages={this.state.chats[this.state.activeChatId]}/>
        <InputArea send={this.sendMessage}/>
      </div>
    );
  }
}

export default App;
