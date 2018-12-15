import React from 'react';
import moment from 'moment';

const ChatBar = ({ sendMessage, counsellorId, userId }) => {
  let input;

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      if(counsellorId && input.value){
        let userMsg = {
          type:'toCounsellorMsg',
          counsellorId,
          userId,
          text: input.value,
          time: moment().format('h:mm:ss a')
        }
        sendMessage(userMsg);
      }
      input.value = '';
    }
  }

  return (
    <div className="chatbar">
      <input 
        className="chat-input"
        size="large"
        ref={node => input = node}
        onKeyPress={onPressEnter}
      />
    </div>
  )
};

export default ChatBar;
