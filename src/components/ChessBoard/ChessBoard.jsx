import Chess from 'chess.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import {
  createBoard,
  fetchCurrentGame,
  updateBoard,
} from '../../services/boards';

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());

  const [currentGame, setCurrentGame] = useState([]);

  useEffect(() => {
    const fetchGame = async () => {
      const data = await fetchCurrentGame();
      setCurrentGame(data);
    };
    fetchGame();
  }, []);

  console.log(currentGame);

  const onDrop = async (startingSquare, targetSquare) => {
    const gameState = { ...game };
    const move = gameState.move({
      from: startingSquare,
      to: targetSquare,
    });
    setGame(gameState);
    console.log('inside ondrop');
    await updateBoard(currentGame.id, game.board());

    return move;
  };

  const handleGameBoard = async () => {
    await createBoard(game.board());
  };
  return (
    <div>
      <Chessboard
        id="BasicBoard"
        onPieceDrop={onDrop}
        position={game.fen()}
        boardOrientation="black"
        boardWidth={300}
      />
      <button onClick={handleGameBoard}>Send Game Board</button>
    </div>
  );
}
