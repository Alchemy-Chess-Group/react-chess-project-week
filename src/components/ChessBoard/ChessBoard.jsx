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
      const data = await fetchCurrentGame();
      setCurrentGame(data);
    };
    fetchGame();
    console.log('inside useEffect');
  }, []);

  useEffect(() => {
    client
      .from('boards')
      .on('*', (payload) => {
        console.log('Change received!', payload);
        setCurrentGame(payload.new);
      })
      .subscribe();
  }, []);
  console.log('currentGame', currentGame);

  const onDrop = async (startingSquare, targetSquare) => {
    const gameState = { ...game };
    const move = gameState.move({
      from: startingSquare,
      to: targetSquare,
    });
    setGame(gameState);
    const gameFen = game.fen();
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
