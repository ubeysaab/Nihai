import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { v4 as uuid } from 'uuid';
import './App.scss'

// Components 
import Main from './components/main/Main';
import Sidebar from "./components/sidebar/Sidebar"

function App() {


  const [isActive,setIsActive]= useState(false)








  const [chats,setChats]=useState([])

  function createNewChat(){
    const newChat = [];
    newChat.push({
      id:uuid(),
      title:"new chat",
      content:"How i can help You",
      role: 'system',

    })
    console.log("im Clicked babe")
    // update chats array 
    setChats(prev => [...prev,newChat])
  }

  console.log(chats)
  return (
    <main className='app'>
    <Sidebar  createNewChat={createNewChat} chats={chats}  isActive={isActive} setIsActive={setIsActive}/>
      <Main  isActive={isActive} setIsActive={setIsActive} createNewChat={createNewChat}/>
    </main>
  )
}

export default App
