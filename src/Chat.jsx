import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import './Chat.css';

class Chat extends Component{
    state = {
      messages:[],
      counsellor: {},
      userId:''
    };

  componentWillMount(){
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({type:'user'}))
    };

    this.socket.onmessage = json => {
      let parsedJson = JSON.parse(json.data);
      switch (parsedJson.type){
        case 'id':
          this.setState({userId:parsedJson.id});
          break;
        case 'startChat':
          this.setState({counsellor:parsedJson.counsellor});
          break;
        case 'toUserMsg':
          let messages = [...this.state.messages, parsedJson];
          this.setState({messages});
          break;
        default:
          console.log('Unregonized message type:', parsedJson.type);
      }
    }
  }

  sendMessage = (message) => {
    let messages = [...this.state.messages, message];
    this.setState({messages});
    this.socket.send(JSON.stringify(message))
  }
  render(){
    let counsellorName = this.state.counsellor.name? this.state.counsellor.name : null;
    let counsellorId = this.state.counsellor.counselerId? this.state.counsellor.counselerId : null;
    return (
      <div className='chat'>
        <div className="chat-header">
          {counsellorName}
        </div>

        <Messages 
          messages={this.state.messages} 
          clientName={counsellorName}
        />

        <ChatBar         
          sendMessage={this.sendMessage}
          counsellorId={counsellorId}
          userId={this.state.userId}
        />
      </div>
    );
  };
}

export default Chat;