import React from 'react';
import ChatBox from '../../components/ChatBox/ChatBox';
import ChessBoard from '../../components/ChessBoard/ChessBoard';
import style from './GameRoom.css';

export default function GameRoom() {
  return (
    <>
      <h3>Game Room #13</h3>
      <div className={style.gameRoom}>
        <ChessBoard />
        <ChatBox />
      </div>
    </>
  );
}
