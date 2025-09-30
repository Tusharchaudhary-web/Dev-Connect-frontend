import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();

  const user = useSelector((store) => store.user);

  const userId = user?._id;

  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);
  const [socket, setSocket] = useState(null);

  // as soon as the page loads , i want to connect with my server

  const fetchChat = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    console.log(chat.data.messages);
    const chatMessages = chat?.data?.messages.map((msg) => {
      return { fullName: msg?.senderId?.fullName, text: msg.text };
    });
    setMessage(chatMessages);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const s = createSocketConnection();
    setSocket(s);
    s.emit("joinChat", { fullName: user.fullName, userId, targetUserId });

    s.on("messageReceived", ({ fullName, text }) => {
      setMessage((message) => [...message, { fullName, text }]);
      // setMessage[...message, { fullName, text }]);
    });

    return () => s.disconnect();
  }, [userId, targetUserId]);

  // this socket is used to emit events

  const sendMessage = () => {
    if (!socket) return;
    socket.emit("sendMessage", {
      fullName: user.fullName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Room</div>

      <div className="chatroom">
        {message.map((msg, index) => (
          <div
            key={index}
            className="chat-message" 
          >
            <div className="message-sender">{msg.fullName}</div>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" && newMessage.trim() !== "") {
              sendMessage();
            }
          }}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
