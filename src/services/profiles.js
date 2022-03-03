import { client, parseData } from './client';

export async function getProfile(uuid) {
  const request = await client.from('players').select().match({ uuid });
  console.log('ewqewqeqw', parseData(request));
  return parseData(request);
}

export async function getAllProfiles() {
  const request = await client.from('players').select('*');
  return parseData(request);
}

export async function createProfile({
  name,
  displayName,
  email,
  bio,
  avatar,
  uuid,
}) {
  const request = await client
    .from('players')
    .insert({ name, displayName, email, bio, avatar, uuid });
  return parseData(request);
}

export async function updateProfile({ name, displayName, email, bio, avatar }) {
  const request = await client
    .from('players')
    .update({ name, displayName, email, bio, avatar })
    .match({ email });
  return parseData(request);
}

export async function deleteProfile(uuid) {
  console.log('uuid', uuid);
  const request = await client.from('players').delete('*').match({ uuid });
  return parseData(request);
}
