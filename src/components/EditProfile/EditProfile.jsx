import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import {
  createProfile,
  deleteProfile,
  updateProfile,
} from '../../services/profiles';
import style from './EditProfile.css';

export default function EditProfile() {
  const { user, setUser } = useUser();
  const uuid = user.id;
  const history = useHistory();
  const { profile } = useProfile();
  const email = user.email;
  const [name, setName] = useState(profile.name);
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [bio, setBio] = useState(profile.bio);
  const [avatar, setAvatar] = useState(profile.avatar);


  useEffect(() => {
    setName(profile.name);
    setDisplayName(profile.displayName);
    setBio(profile.bio);
    setAvatar(profile.avatar);
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.email) {
      await updateProfile({
        name,
        displayName,
        email,
        bio,
        avatar,
      });
    } else {
      await createProfile({
        name,
        displayName,
        email,
        bio,
        avatar,
        uuid,
      });
    }
    history.push('/');
  };

  const handleDelete = async () => {
    await deleteProfile(user.id);
    setUser({});
    history.push('/');
  };

  return (
    <div className={style.editProfile}>
      <form className={style.editForm} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required="required"
        />

        <label>Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required="required"
        />

        <label>Email</label>
        <div>{email}</div>

        <label>Bio</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required="required"
        />

        <label>Avatar</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required="required"
        />

        <button type="submit">Save Changes</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}
