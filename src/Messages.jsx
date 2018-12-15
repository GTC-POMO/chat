import React from 'react';
import uuidv4 from 'uuid/v4';

const Messages = ({ counsellorName, messages }) => {
  return ( 
    counsellorName && messages ? 
    (
      <div className="messages">
        <p>You are now chatting with <b>{counsellorName}</b></p><br />

        {
          messages.map(message=>(
          <div key={uuidv4()}>
            <div className='message-time'> <span>{message.time}</span></div> 
            <div className={message.type ==='toCounsellorMsg' ?"message-bubbles-right": "message-bubbles-left"}>
              <span className={message.type ==='toCounsellorMsg' ? "counsellor-message" :"client-message"}>{message.text}</span>
            </div>
            </div>
          ))
        }
      </div>
    ) : null
  )
}

export default Messages;

