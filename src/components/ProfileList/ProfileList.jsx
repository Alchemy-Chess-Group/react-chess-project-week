import React, { useEffect, useState } from 'react';
import { getAllProfiles } from '../../services/profiles';
import ProfilePop from '../ProfilePop/ProfilePop';
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
    <div>
      <ul className={style.listCard}>
        {profiles.map((profile) => (
          <>
            {profile.displayName && (
              <li key={profile.id}>
                <ProfilePop profile={profile} />
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}
