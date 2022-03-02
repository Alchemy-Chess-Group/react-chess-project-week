import React from 'react';
<<<<<<< HEAD
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profiles';

export default function Profile() {
  const { user } = useUser();
  //   const [profile, setProfile] = useState([]);
=======
import { Link } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';

export default function Profile() {
>>>>>>> 1f304ece8c82bc655efe0e8b7042d8c1b090b9fe
  const { profile } = useProfile();
  const { name, displayName, email, win, loss, bio, avatar } = profile;

  return (
    <div>
      <div>{name}</div>
      <div>{displayName}</div>
      <div>{email}</div>
      <div>{win}</div>
      <div>{loss}</div>
      <div>{bio}</div>
      {avatar ? <div>{avatar}</div> : <div>Default Profile Photo</div>}
      <Link to="/edit-profile">Edit</Link>
    </div>
  );
}
