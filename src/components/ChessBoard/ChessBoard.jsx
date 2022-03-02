import Chess from 'chess.js';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import {
  createBoard,
  fetchCurrentGame,
  subscribeToBoard,
  updateBoard,
  getGamePayload,
} from '../../services/boards';
import { client } from '../../services/client';

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());
  const [currentGame, setCurrentGame] = useState({ id: 13 });
  const [color, setColor] = useState('white');
  const chessBoardRef = useRef();

  useEffect(() => {
    const fetchGame = async () => {
      const data = await fetchCurrentGame(currentGame.id);
      setCurrentGame(data);
    };
    fetchGame();
  }, []);

  useEffect(() => {
    client
      .from('boards')
      .on('*', (payload) => {
        console.log('Change received!', payload);
        game.load(payload.new.currentGameState);
        setCurrentGame(payload.new);
      })
      .subscribe();
  }, []);

  const onDrop = async (startingSquare, targetSquare) => {
    const gameState = { ...game };
    const move = gameState.move({
      from: startingSquare,
      to: targetSquare,
    });
    setGame(gameState);
    console.log('gameState', gameState);
    console.log('gameState', gameState.fen());
    const gameFen = gameState.fen();
    await updateBoard(currentGame.id, gameFen);
    return move;
  };

  const handleSwitchColor = () => {
    if (color === 'white') {
      setColor('black');
    } else {
      setColor('white');
    }
  };

  return (
    <div>
      <Chessboard
        id="BasicBoard"
        onPieceDrop={onDrop}
        position={currentGame.currentGameState}
        boardOrientation={color}
        boardWidth={300}
        ref={chessBoardRef}
      />
      <button onClick={handleSwitchColor}>Switch Color</button>
    </div>
  );
}
