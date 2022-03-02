import Chess from 'chess.js';
import { useEffect } from 'react';
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
import { convertString } from '../../utils/utils';

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());
  const [currentGame, setCurrentGame] = useState({ id: 13 });
  const [color, setColor] = useState('white');

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
  });
  console.log('currentGame', currentGame);

  const onDrop = async (startingSquare, targetSquare) => {
    const gameState = { ...game };
    const move = gameState.move({
      from: startingSquare,
      to: targetSquare,
    });
    setGame(gameState);
    await updateBoard(currentGame.id, game.fen());

    return move;
  };

  const handleGameBoard = async () => {
    await createBoard(game.board());
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
      />
      <button onClick={handleGameBoard}>Send Game Board</button>
      <button onClick={handleSwitchColor}>Switch Color</button>
    </div>
  );
}
