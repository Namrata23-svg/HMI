// ChatComponent.js

import React, { useState } from "react";
import axios from "axios";


import styled from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

// ChatIcon component
const ChatIcon = ({ onClick }) => {
  return (
    <div className="chat-icon" onClick={onClick}>
      <FontAwesomeIcon icon={faComment} />
    </div>
  );
};

// ChatWindow component
const ChatWindow = () => {
  return (
    <div className="chat-window">
      <ChatComponent></ChatComponent>
    </div>
  );
};

const ChatContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: fixed;
  bottom: 90px;
  right: 40px;
  width: 300px;
  height: 400px;
  background-color:#F0F0F0;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &:hover {
    background-color: #E8E8E8;
`;
const GradientText = styled.div`
  font-size: 1.1em;
  background: linear-gradient(45deg, #ff6ec4, #7873f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const MessageContainer = styled.div`
  margin-bottom: 10px;

  &.user {
    text-align: right;
    color: #007bff;
  }

  &.assistant {
    text-align: left;
    color: #333;
    background-color: #fff3e0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 2px solid black;
    border-radius: 4px;
    margin-right: 10px;
    
  }

  button {
    background-color: #007bff;
    color:000066;
    padding: 5px 7px;
    border: none;
    border-radius:50px / 40px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  }
`;

const ChatComponent = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyB_jxtqMrUlVBUvluKq7v_oAUT0nSNjZas"
    );

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(input);
    const response = await result.response;
    const text = response.text();

    // Update the conversation history with the response from ChatGPT
    setMessages([...messages, { role: "assistant", content: text }]);

    // Clear the input field
    setInput("");
  };

  return (
    <ChatContainer >
      <div>
        <GradientText>
        <div className="gradient-text" >
          Hi, There! <br />
          Welcome to <b>HMI-COE</b> !<br />
          <br />
          I am Maya! <br />
          Text Assistant from <b>HMI-COE </b>! <br />
          <br />
          Ask your question here! <br />
          I will brainstorm with Gemini and provide you with the best possible
          answer! <br />
          <br />
          <br />
          
        </div></GradientText>
        
        {messages.map((message, index) => (
          <MessageContainer key={index} className={message.role}>
            {message.content}
          </MessageContainer>
        ))}
      </div>
      <InputContainer>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </InputContainer>
    </ChatContainer>
  );
};

export { ChatIcon, ChatComponent };
