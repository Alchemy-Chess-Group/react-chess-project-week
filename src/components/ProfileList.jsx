import React, { useEffect, useState } from 'react';
import { getAllProfiles } from '../services/profiles';

export default function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  console.log('profiles', profiles);

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
        <li key={profile.id}>{profile.displayName}</li>
      ))}
    </ul>
  );
}
