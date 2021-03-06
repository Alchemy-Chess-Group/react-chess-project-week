import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';
import style from './Header.css';

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
    <header>
      <div className={style.header}>
        <h1 onClick={handleHome} className={style.title}>
          Once Upawn a Time
        </h1>
      </div>
      <span>
        {user.email ? (
          <button onClick={handleSignOut} className={style.headerButton}>
            Sign Out
          </button>
        ) : (
          <button onClick={handleSignIn} className={style.headerButton}>
            Sign In
          </button>
        )}
      </span>
    </header>
  );
}
