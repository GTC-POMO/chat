import React from 'react';

const Display = ({ messages }) => {
  return (
    <ul>
      {messages.map(message => <li>{message.type}-{message.message}</li>)}
    </ul>
  )
}

export default Display;