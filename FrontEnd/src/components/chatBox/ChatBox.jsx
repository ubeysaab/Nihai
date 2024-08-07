import React from 'react'

function ChatBox(props) {
  const title = props.chat[0].title;
  const num = props.num
  return (
    <div className='chatbox'>{title} {num}</div>
  )
}

export default ChatBox