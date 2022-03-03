import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './AuthForm.css';

export default function AuthForm({ handleAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAuth(email, password);
  };

  return (
    <form className={style.authForm}>
      <label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
          required="required"
        />
      </label>

      <label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
          required="required"
        />
      </label>
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}
