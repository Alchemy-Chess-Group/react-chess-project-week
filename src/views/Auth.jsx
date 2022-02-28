import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useUser } from '../context/UserContext';
import { signInUser, signUpUser } from '../services/users';

export default function Auth() {
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
    <div>
      <AuthForm handleAuth={handleAuth} />
    </div>
  );
}
