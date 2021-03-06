import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileProvider } from '../../context/ProfileContext';
import Profile from '../../components/Profile/Profile';
import ProfileList from '../../components/ProfileList/ProfileList';
import { useUser } from '../../context/UserContext';
import style from './Home.css';

export default function Home() {
  const { user } = useUser();
  return (
    <div className={style.homePage}>
      <ProfileProvider>
        {user.email ? <Profile /> : <div></div>}
        <Link to="/game-room">
          <h1>Room 13</h1>
        </Link>
        <ProfileList />
      </ProfileProvider>
    </div>
  );
}
