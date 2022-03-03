import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';
import style from './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.replace('/edit-profile');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className={style.authContainer}>
      <div className={style.authCard}>
        <AuthForm handleAuth={handleAuth} />
        {isSigningUp ? (
          <>
            <p>Have an account? Sign In</p>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
