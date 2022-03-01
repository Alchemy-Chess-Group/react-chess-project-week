import Chess from 'chess.js';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());

  console.log('game', game.fen());
  console.log('turn', game.turn());

  const onDrop = (startingSquare, targetSquare) => {
    const gameState = { ...game };
    const move = gameState.move({
      from: startingSquare,
      to: targetSquare,
    });
    setGame(gameState);
    return move;
  };
  return (
    <div>
      <Chessboard
        id="BasicBoard"
        onPieceDrop={onDrop}
        position={game.fen()}
        boardOrientation="black"
      />
    </div>
  );
}
