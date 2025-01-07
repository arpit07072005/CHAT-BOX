import React, { useEffect, useState } from 'react'

function Chat() {
  const [isMobile, setIsMobile] = useState(false);
  const key = "messagekey"
  const [messages, setMessages] = useState(()=>{
 return JSON.parse(localStorage.getItem(key))
  ||{user1:[],user2:[],}});
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(messages))
  },[messages])
   const [users, setUsers] = useState([
    { id: 1, name: 'Caressa Jessalin', img: 'Ellipse 14.svg', lastmsg: 'Lorem ipsum dolor sit am...' },
    { id: 2, name: 'Letty Bride', img: 'Ellipse 14.svg', lastmsg: 'Lorem ipsum dolor sit am...' },
  ]);
  const [current ,setCurrent]=useState('');
  function handlemessage(e){
setCurrent(e.target.value);
  }
  const handlesend = () => {
    if (current.trim() !== '') {
      setMessages(prevMessages => ({
        ...prevMessages,[`user${currentuser.id}`]: [...prevMessages[`user${currentuser.id}`], { text: current, sender: 'user2' }]}));
      setCurrent('');
    }
  };
const handleback=()=>{
  setMobileActive(false); 
}
const handledelete=()=>{
  setMessages({...messages,[`user${currentuser.id}`]: []})
}
const [currentuser, setCurrentuser]=useState(users[1]);
const [mobileActive, setMobileActive] = useState(false);
function handleuser(e){
setCurrentuser(e)
if (isMobile) {
      setMobileActive(true); 
    }
}
console.log(messages)
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setIsMobile(true); 
    } else {
      setIsMobile(false);
      setMobileActive(false);
    }
  };
window.addEventListener('resize', handleResize);
  handleResize(); 

  return () => {
    window.removeEventListener('resize', handleResize); // Cleanup on component unmount
  };
}, []);
  return (
    <div className='chats'>
       <div className={`allmessages ${mobileActive ? 'mobileactive' : ''}`}>
        <div className="allyourchats">
    <p className="heading">ALL YOUR CHATS</p>
    <button className="chat-images"><img src="Black.svg" alt="" /> Chat Images: ON</button>
    <p className="headingcontent">When a bot sends you images, you will be charged one secondary image</p>
    <div>
    {users.map((user) => (
      <>
      <div className="cont1"  key={user.id} onClick={()=>handleuser(user)}>
        <div className="cont1img"><img src={user.img} alt="" /></div>
        <div className="cont1details">
          <div className="cont1name">{user.name}</div>
          <div className="cont1lastmsg">{user.lastmsg}</div>
        </div>
      </div>
      </>
))};
    </div>
      <hr />
      <div className="bot">
        <div><img src="Group 143726680.svg" alt="" /></div>
        <div className='botdetails'>Create new bot</div>
      </div>
        </div>
     </div>
     <div className={`particularmsg ${mobileActive ? 'mobileactive' : ''}`}>

      <div className="msgtop">
        <div className="userdetails">
      <div className="cont1img"><img src={currentuser.img} alt="" /></div>
      <div className="cont1name">{currentuser.name}</div>
      </div>
      <div className="useraction">
        <div className="back-container" onClick={handleback}>
          <div className="backimg"><img src="arrow-left 1 (traced).svg" alt="" /></div>
          <div className="back">Back</div>
        </div>
        <div className="delete-container" onClick={handledelete}>
          <div className="deleteimg"><img src="trash-bin 1 (traced).svg" alt="" /></div>
          <div className="delete">Delete</div>
        </div>
      </div>
      </div>
      <div className="chat">
          {(currentuser.id==1)&& messages.user1.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user1' ? 'user1' : 'user2'}`}>
              {msg.text}
            </div>
          ))}
           {(currentuser.id==2)&& messages.user2.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user1' ? 'user1' : 'user2'}`}>
              {msg.text}
            </div>
          ))}
        </div>
      <div className="input">
        <input type="text" className="userinput" placeholder='Message...' value={current} onChange={(e)=>handlemessage(e)}/>
        <button className='send' onClick={handlesend}><img src="AnyConv.com__ap.png-removebg-preview.png" alt="" /></button>
      </div>
     </div>
    </div>
  )
}

export default Chat
