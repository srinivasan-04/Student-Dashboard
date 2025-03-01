import React, { useState } from "react";
import { FiSend, FiSearch, FiPhoneCall, FiVideo } from "react-icons/fi";
import { BsFillMicFill, BsThreeDots } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./message.css";
import ContentHeader from "../content/contentHeader";

const Message = () => {
  const [chatList, ] = useState([
    { id: 1, name: "Muhammad Ali", status: "Driver", message: "Muhammad Ali is typing...", time: "07:40 AM" },
    { id: 2, name: "Gyna Catherine", status: "Customer", message: "Please carry it carefully", time: "07:45 AM" },
    { id: 3, name: "Nayla Sari", status: "Recipient", message: "Missed Call", time: "08:00 AM" },
    { id: 4, name: "Raditya Rasyid", status: "Driver", message: "0:08", time: "08:12 AM" },
    { id: 5, name: "Arlene Lily", status: "Customer", message: "Sending you audio files", time: "08:15 AM" },
    { id: 6, name: "Jacob Jones", status: "Driver", message: "Missed Call", time: "Yesterday" },
    { id: 7, name: "Ananda Alodea", status: "Recipient", message: "Okay, I'll wait", time: "Yesterday" },
  ]);

  const [messages, setMessages] = useState([
    { sender: "Muhammad Ali", text: "Hi! Just confirming that you'll be picking up a package from our location today.", time: "4:12 PM", type: "received" },
    { sender: "Me", text: "Yes, I'm on my way to your location now. Should be there in about 15 minutes.", time: "4:10 PM", type: "sent" },
    { sender: "Muhammad Ali", text: "Perfect, thanks for letting us know. The package is ready for pickup whenever you arrive.", time: "7:38 AM", type: "received" },
    { sender: "Me", text: "Got it. I'll let you know once I've picked it up and provide an update on the delivery schedule.", time: "7:40 AM", type: "sent" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "Me", text: newMessage, time: "Now", type: "sent" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat--container">
      <ContentHeader/>
    <div className="chat-app">
      
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="new-message">
          <button>Inbox</button>
        </div>
        <div className="inbox">
          {/* <div className="search">
            <FiSearch />
            <input type="text" placeholder="Search..." />
          </div> */}
          <ul>
            {chatList.map((chat) => (
              <li key={chat.id} className="chat-item">
                <div className="icon ">
                <FaUserCircle className=" icon"/>
                </div>
                
                <div className="details">
                  <h5>{chat.name}</h5>
                  <p>{chat.message}</p>
                </div>
                <span>{chat.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-header">
          <div className="chat-header-info">
            <FaUserCircle className="icon"/>
            <h6>Muhammad Ali</h6>
            <span>Online</span>
          </div>
          <div className="chat-header-actions">
            <FiSearch className="icon"/>
            <FiPhoneCall className="icon"/>
            <FiVideo className="icon"/>
            <BsThreeDots className="icon"/>
          </div>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`msg-message ${msg.type === 'sent' ? 'msg-sent' : 'msg-received'}`}>
              <p>{msg.text}</p>
              <span className="msg-message-time">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <BsFillMicFill className="icon" />
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSend} className="but">
            <FiSend />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Message;
