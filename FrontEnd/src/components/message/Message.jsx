import React from 'react'

function Message(props) {
  return (
    <div className={props.role =='system'?" message message--system":props.role=="user"?" message message--user":" message message--system"}>
      <p>
        {props.message}
      </p>
    </div>
  )
}

export default Message