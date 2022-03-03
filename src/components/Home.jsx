import React from 'react';
import { ProfileProvider } from '../context/ProfileContext';
import Profile from './Profile';
import ProfileList from './ProfileList';

export default function Home() {
  return (
    <div>
      <ProfileProvider>
        <Profile />
        <ProfileList />
      </ProfileProvider>
    </div>
  );
}
