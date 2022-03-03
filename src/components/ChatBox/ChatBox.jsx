import React, { useState, useEffect } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { fetchMessages, sendMessage } from '../../services/chatbox';
import { client } from '../../services/client';
import style from './ChatBox.css';

export default function ChatBox() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const {
    profile: { displayName },
  } = useProfile();

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
    await sendMessage(displayName, text);
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
        <label>{displayName}</label>
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
