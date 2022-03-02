import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/users';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOutUser();
    setUser({});
    history.push('/login');
  };

  const handleSignIn = () => {
    history.push('/login');
  };

  const handleHome = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Once Upawn a Time</h1>
      {user.email ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
      <button onClick={handleHome}>Home</button>
    </div>
  );
}
