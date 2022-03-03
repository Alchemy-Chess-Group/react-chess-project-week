import Chess from 'chess.js';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { fetchCurrentGame, updateBoard } from '../../services/boards';
import { client } from '../../services/client';
import style from './ChessBoard.css';

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
    console.log('inside useEffect');
  }, []);

  useEffect(() => {
    client
      .from('boards')
      .on('*', (payload) => {
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


  const handleReset = async () => {
    game.reset();
    await updateBoard(currentGame.id, game.fen());
  };

  return (
    <div>
      <Chessboard
        id="BasicBoard"
        onPieceDrop={onDrop}
        position={currentGame.currentGameState}
        boardOrientation={color}
        boardWidth={400}
        ref={chessBoardRef}
        customBoardStyle={{
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 2)',
        }}
      />
      <div className={style.controls}>
        <button onClick={handleSwitchColor}>Switch Color</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
