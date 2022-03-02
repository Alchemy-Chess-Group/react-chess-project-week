import { client, parseData } from './client';

export async function sendMessage(name, text) {
  const request = await client.from('chatbox').insert({ name, text });
  return parseData(request);
}

export async function fetchMessages() {
  const request = await client.from('chatbox').select('*');
  return parseData(request);
}
