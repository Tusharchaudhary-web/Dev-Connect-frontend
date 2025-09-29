import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";

const Chat = () => {
  const { targetUserId } = useParams();

  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const s = createSocketConnection();

    setSocket(s);

    s.emit("joinChat", { fullName: user.fullName, userId, targetUserId });

    s.on("messageReceived", ({ fullName, text }) => {
      setMessage((message) => [...message, { fullName, text }]);
    });
      return () => s.disconnect(); // cleanup
  }, [userId, targetUserId]);

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
          <div className="chat-message" key={index}>
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
        <button
          onClick={sendMessage}
         
        >
          send
        </button>
      </div>
    </div>
  );
};

export default Chat;
