import React from 'react';

const ChatSelector = ({ ids, selectChat }) => {
  return (
    <ul>
      {ids.map(id => <button onClick={selectChat(id)}>{id}</button>)}
    </ul>
  )
}
export default ChatSelector;