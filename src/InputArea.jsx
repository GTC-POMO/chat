import React, { Component } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }
  // Control form
  _onChange = (event) => {
    this.setState({input: event.target.value})
  }
  // Send message
  _sendMessage = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      let message = {
        type: 'outgoing',
        message: this.state.input,
      }
      this.props.send(message);
      event.target.value = "";
      this.setState({input: ''});
    }
  }
  render() {
    return(
      <textarea placeholder="input message then press enter" onChange={this._onChange} onKeyPress={this._sendMessage}></textarea>
    )
  }
}
 export default InputArea;