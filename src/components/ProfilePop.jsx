import style from './ProfilePop.css';
import React, { useState } from 'react';

export default function ProfilePop(profile) {
  const [pop, setPop] = useState(false);
  const { name, displayName, email, bio } = profile.profile;
  console.log(profile, name);

  const togglePop = () => {
    setPop(!pop);
  };
  return (
    <div>
      <p onClick={togglePop}>{displayName}</p>
      {pop && (
        <div className={style.popupBox}>
          <div className={style.box}>
            <span className={style.closeIcon} onClick={togglePop}>
              x
            </span>
            <div>{name}</div>
            <div>{displayName}</div>
            <div>{email}</div>
            <div>{bio}</div>
          </div>
        </div>
      )}
    </div>
  );
}
