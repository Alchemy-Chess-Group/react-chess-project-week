import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileProvider } from '../context/ProfileContext';
import Profile from '../components/Profile';
import ProfileList from '../components/ProfileList';
import { useUser } from '../context/UserContext';

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <ProfileProvider>
        {user.email ? <Profile /> : <div></div>}
        <Link to="/game-room">Room 13</Link>
        <ProfileList />
      </ProfileProvider>
    </div>
  );
}
