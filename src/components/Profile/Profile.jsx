import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import style from './Profile.css';

export default function Profile() {
  const { profile } = useProfile();
  const { name, displayName, email, win, loss, bio, avatar } = profile;
  console.log('profile', name);

  return (
    <div className={style.profile}>
      <div>{name}</div>
      <div>{displayName}</div>
      <div>{email}</div>
      <div>{win}</div>
      <div>{loss}</div>
      <div>{bio}</div>
      {/* {avatar ? <div>{avatar}</div> : <div>Default Profile Photo</div>} */}
      <Link to="/edit-profile">Edit</Link>
    </div>
  );
}
