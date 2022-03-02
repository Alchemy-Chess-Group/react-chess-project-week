import React, { useState, useEffect } from 'react';
import { fetchMessages, sendMessage } from '../services/chatbox';
import { client } from '../services/client';

export default function ChatBox() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMessages();
      console.log('data', data);
      setMessages(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    client
      .from('chatbox')
      .on('*', (payload) => {
        setMessages(payload);
        console.log(payload);
      })
      .subscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await sendMessage(name, text);
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Text
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
