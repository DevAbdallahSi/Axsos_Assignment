import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("chat_history", (history) => {
      setMessages(history);
    });

    return () => {
      socket.off("receive_message");
      socket.off("chat_history");
    };
  }, []);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      const msg = {
        room,
        username,
        message,
      };
      socket.emit("send_message", msg);
      setMessage("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="App">
      <h2>⚡ Chat App</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={joinRoom}>Join</button>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <input
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
