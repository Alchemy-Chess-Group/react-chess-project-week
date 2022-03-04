import { client, parseData } from './client';

export async function createBoard(currentGameState) {
  const request = await client.from('boards').insert([{ currentGameState }]);
  return parseData(request);
}

export async function fetchCurrentGame(id) {
  const request = await client
    .from('boards')
    .select('*')
    .match({ id })
    .single();
  return parseData(request);
}

export async function updateBoard(id, currentGameState) {
  const request = await client
    .from('boards')
    .update([{ currentGameState }])
    .match({ id });
  return parseData(request);
}
