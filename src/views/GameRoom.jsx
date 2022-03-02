import React from 'react';
import ChatBox from '../components/ChatBox';
import ChessBoard from '../components/ChessBoard/ChessBoard';

export default function GameRoom() {
  return (
    <>
      <h3>Game Room</h3>
      <div>
        <ChessBoard />
        <ChatBox />
      </div>
    </>
  );
}
