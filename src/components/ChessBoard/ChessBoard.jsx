import Chess from 'chess.js';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { createBoard } from '../../services/boards';

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());

  console.log('game', game);
  console.log('game.board', game.board());
  // const { fen, turn } = game;

  // console.log('fen', fen);
  // console.log('turn', turn);

  const onDrop = (startingSquare, targetSquare) => {
    const gameState = { ...game };
    const move = gameState.move({
      from: startingSquare,
      to: targetSquare,
    });
    setGame(gameState);
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
