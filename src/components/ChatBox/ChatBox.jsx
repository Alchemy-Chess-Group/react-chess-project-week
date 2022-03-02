import React, { useState, useEffect } from 'react';
import { fetchMessages, sendMessage } from '../../services/chatbox';
import { client } from '../../services/client';
import style from './ChatBox.css';

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
        setMessages((prevState) => [...prevState, payload.new]);
      })
      .subscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await sendMessage(name, text);
    setText('');
  };

  return (
    <div>
      <section className={style.chatBox}>
        {messages.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </section>
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
          <textarea
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
