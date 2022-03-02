import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/users';

export default function Header() {
  const { user } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    history.push('/login');
  };

  const handleSignIn = () => {
    history.push('/login');
  };
  return (
    <div>
      <h1>Once Upawn a Time</h1>
      {user.email ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}
