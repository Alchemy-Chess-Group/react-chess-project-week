import React, { useEffect, useState } from 'react';
import { getAllProfiles } from '../services/profiles';
import Profile from './Profile';
import ProfilePop from './ProfilePop';

export default function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllProfiles();
      setProfiles(resp);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <li>{profile.displayName}</li>
          <ProfilePop profile={profile} />
        </div>
      ))}
    </ul>
  );
}
