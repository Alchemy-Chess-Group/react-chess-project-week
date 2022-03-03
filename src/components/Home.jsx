import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileProvider } from '../context/ProfileContext';
import Profile from './Profile';
import ProfileList from './ProfileList';

export default function Home() {
  return (
    <div>
      <ProfileProvider>
        <Profile />
        <Link to="/game-room">Room 13</Link>
        <ProfileList />
      </ProfileProvider>
    </div>
  );
}
