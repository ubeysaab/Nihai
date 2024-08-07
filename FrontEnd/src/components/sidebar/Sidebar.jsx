import React, { useState } from 'react'
import { TfiAlignLeft } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";

import ChatBox from '../chatBox/ChatBox'

function Sidebar(props) {

  console.log(props)

  return (
    <aside className={props.isActive?"sidebar":"sidebar--hidden"}>
      <div className="sidebar__header">

        <TfiAlignLeft className='icon'  onClick={()=>props.setIsActive(prev => !prev)}/>
        <b>Atarli.ai</b>
        <IoCreateOutline className='icon'  onClick={props.createNewChat} />
      </div>
      {
        
        props.chats.length != 0 ? (
          <div className="siderbar__content">
          {props.chats.map((item,index)=>{
            return (<ChatBox chat={item} key={index} num={index}/>)
          })}
        </div>
        ): <p style={{color:"red"}}> There is not chats yet please create a new one </p>
      }

    </aside>
  )
}

export default Sidebar