import React, { useContext, useEffect, useRef, useState } from 'react'
import "./chat.scss"
import { AuthContext } from '../../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import {format} from "timeago.js"
import { SocketContext } from '../../../context/SocketContext';
import { useNotificationStore } from '../../lib/notificationStore';

export default function Chat({chats}) {
    const [chat,setChat]=useState(null);
    const {currentUser}=useContext(AuthContext)
    const {socket}=useContext(SocketContext);
    const messageEndRef = useRef();
     
    const decrease=useNotificationStore((state)=>state.decrease);

      // TO SCROLL DOWN TO THE LATEST MSG OF THE CHAT
    useEffect(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    console.log(chats)



    const handleOpenChat = async (id, receiver) => {
        try {
          const res = await apiRequest("/chats/" + id);
          if (!res.data.seenBy.includes(currentUser.id)) {
            decrease();
          }
        console.log(res)
          setChat({ ...res.data, receiver });
        } catch (err) {
          console.log(err);
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const text = formData.get("text");
    
        if (!text) return;
        try {
          const res = await apiRequest.post("/messages/" + chat.id, { text });
          setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
          e.target.reset();
          // TO SEND THE MESSAGE
          socket.emit("sendMessage", {
            receiverId: chat.receiver.id,
            data: res.data,
          });
        } catch (err) {
          console.log(err);
        }
      };

      // TO RECEIVE THE MESSAGE 
      useEffect(() => {

        // MSG RECEIVED MUST BE READ ON DATABASE,
        const read = async () => {
          try {
            // UPDATE THE CHAT SEENBY PROPERTY
            await apiRequest.put("/chats/read/" + chat.id);
          } catch (err) {
            console.log(err);
          }
        };
    
        if (chat && socket) {
          socket.on("getMessage", (data) => {
            // TO CHECK THE MSG RECEIVED IS FROM THE CURRENT CHAT
            if (chat.id === data.chatId) {
              setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
              read();
            }
          });
        }
        // CLEAN UP FUNC TO PREVENT RE-RENDERING  
        return () => {
          socket.off("getMessage");
        };
      }, [socket, chat]);

  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        {
            chats.map(c=>(
                <div className="message" key={c.id}
                style={{
                    backgroundColor:
                      c.seenBy.includes(currentUser.id) || chat?.id === c.id
                        ? "white"
                        : "#fecd514e",
                  }}
               onClick={() => handleOpenChat(c.id, c.receiver)}
                >
                <img src={c.receiver.avatar || "noavatar.jpg"} alt="" />
                <span>{c.receiver.username}</span>
             <p>{c.lastMessage}</p>
              </div>
            ))
        }
       
        
      </div>

    {/* Chat Box */}

     { chat && (<div className="chatBox">
        <div className="top">
            <div className="user">
                <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
                <span>{chat.receiver.username}</span> 
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
            {
                chat.messages.map((message)=>(
                <div className="chatMessage" key={message.id}
                style={{
                    alignSelf:
                      message.userId === currentUser.id
                        ? "flex-end"
                        : "flex-start",
                    textAlign:
                      message.userId === currentUser.id ? "right" : "left",
                  }}
                >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
                </div>
                ))
            }
            <div ref={messageEndRef}></div>
        </div>
        <form onSubmit={handleSubmit} className="bottom">
            <textarea name='text' ></textarea>
            <button>Send</button>
        </form>
      </div>
)}
    </div>
  )
}