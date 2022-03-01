import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profiles';

export default function Profile() {
  const { user } = useUser();
  const [profile, setProfile] = useState([]);
  const { name, displayName, email, win, loss, bio, avatar } = profile;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getProfile(user.id);
      setProfile(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>{name}</div>
      <div>{displayName}</div>
      <div>{email}</div>
      <div>{win}</div>
      <div>{loss}</div>
      <div>{bio}</div>
      {avatar ? <div>{avatar}</div> : <div>Default Profile Photo</div>}
    </div>
  );
}
