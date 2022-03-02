import { client, parseData } from './client';

export async function createBoard(currentGameState) {
  const request = await client.from('boards').insert([{ currentGameState }]);
  return parseData(request);
}

export async function fetchCurrentGame() {
  const request = await client.from('boards').select('*').single();
  return parseData(request);
}

export async function updateBoard(id, currentGameState) {
  const request = await client
    .from('boards')
    .update([{ currentGameState }])
    .match({ id });
  return parseData(request);
}

// export async function subscribeToBoard(cb) {
//   client
//     .from('boards')
//     .on('*', (payload) => {
//       console.log('Change received!', payload);
//       cb(payload.new);
//     })
//     .subscribe();
// }

// export async function getGamePayload() {
//   const request = client.getSubscriptions();
//   return request;
// }
