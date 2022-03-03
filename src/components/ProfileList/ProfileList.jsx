import React, { useEffect, useState } from 'react';
import { getAllProfiles } from '../../services/profiles';
import style from './ProfileList.css';

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
    <div className={style.listCard}>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.displayName ? profile.displayName : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
