import { client, parseData } from './client';

export async function createBoard(currentGameState) {
  const request = await client.from('boards').insert([{ currentGameState }]);
  return parseData(request);
}
export async function updateBoard(id, currentGameState) {
  const request = await client.from('board').update([currentGameState]);
}
