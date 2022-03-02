import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import {
  createProfile,
  deleteProfile,
  updateProfile,
} from '../services/profiles';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (profile.name) {
      const resp = await updateProfile({
        name,
        displayName,
        email,
        bio,
        avatar,
      });
    } else {
      const resp = await createProfile({
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
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <label>Email</label>
        <div>{email}</div>

        <label>Bio</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label>Avatar</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
