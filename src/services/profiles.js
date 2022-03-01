import { client, parseData } from './client';

export async function getProfile(uuid) {
  const request = await client
    .from('players')
    .select()
    .single()
    .match({ uuid });
  return parseData(request);
}

export async function getAllProfiles() {
  const request = await client.from('players').select('*');
  return parseData(request);
}

export async function createProfile({ name, displayName, email, bio, avatar }) {
  const request = await client
    .from('players')
    .insert({ name, displayName, email, bio, avatar });
  return parseData(request);
}

export async function updateProfile({ name, displayName, email, bio, avatar }) {
  const request = await client
    .from('players')
    .update({ name, displayName, email, bio, avatar })
    .match({ email });
  return parseData(request);
}

export async function deleteProfile(email) {
  const request = await client.from('players').delete('*').match({ email });
  return parseData(request);
}
