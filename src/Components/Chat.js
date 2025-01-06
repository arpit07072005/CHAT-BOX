import React, { useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Hello! Arpit', sender: 'user1' },
    { text: 'yes', sender: 'user2' },
    {text:'what are you doing',sender:'user1' },
    {text:'I am doing project',sender:'user2'}
  ]);
  const [current ,setCurrent]=useState('');
  function handlemessage(e){
setCurrent(e.target.value);
  }
const handlesend=()=>{
  if (current.trim() !== '') {
  setMessages([...messages,{ text: current, sender: 'user2' }]);
  setCurrent('');
  }
}
console.log(messages)
  return (
    <div className='chats'>
     <div className="allmessages">
        <div className="allyourchats">
    <p className="heading">ALL YOUR CHATS</p>
    <button className="chat-images"><img src="Black.svg" alt="" /> Chat Images: ON</button>
    <p className="headingcontent">When a bot sends you images, you will be charged one secondary image</p>
    <div>
      <div className="cont1">
        <div className="cont1img"><img src="Ellipse 14.svg" alt="" /></div>
        <div className="cont1details">
          <div className="cont1name">Caressa Jessalin</div>
          <div className="cont1lastmsg">Lorem ipsum dolor sit am...</div>
        </div>
      </div>
      <div className="cont1">
        <div className="cont1img"><img src="Ellipse 14.svg" alt="" /></div>
        <div className="cont1details">
          <div className="cont1name">Letty Bride</div>
          <div className="cont1lastmsg">Lorem ipsum dolor sit am...</div>
        </div>
      </div>
    </div>
      <hr />
      <div className="bot">
        <div><img src="Group 143726680.svg" alt="" /></div>
        <div className='botdetails'>Create new bot</div>
      </div>
        </div>
     </div>
     <div className="particularmsg">
      <div className="msgtop">
        <div className="userdetails">
      <div className="cont1img"><img src="Ellipse 14.svg" alt="" /></div>
      <div className="cont1name">Caressa Jessalin</div>
      </div>
      <div className="useraction">
        <div className="back-container">
          <div className="backimg"><img src="arrow-left 1 (traced).svg" alt="" /></div>
          <div className="back">Back</div>
        </div>
        <div className="delete-container">
          <div className="deleteimg"><img src="trash-bin 1 (traced).svg" alt="" /></div>
          <div className="delete">Delete</div>
        </div>
      </div>
      </div>
      <div className="chat">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user1' ? 'user1' : 'user2'}`}>
              {msg.text}
            </div>
          ))}
        </div>
      <div className="input">
        <input type="text" className="userinput" placeholder='Message...' value={current} onChange={(e)=>handlemessage(e)}/>
        <button className='send' onClick={handlesend}></button>
      </div>
     </div>
    </div>
  )
}

export default Chat
