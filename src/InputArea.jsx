import React, { Component } from 'react';

class InputArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }
  // Control form
  _onChange = (event) => {
    this.setState({message: event.target.value})
  }
  render() {
    return(
      <textarea onChange={this._onChange}></textarea>
    )
  }
}
 export default InputArea;