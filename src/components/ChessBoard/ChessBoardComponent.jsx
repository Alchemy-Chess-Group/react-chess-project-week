import React from 'react';
import Chessboard from 'chessboardjsx';

import { chess } from 'chess.js';

export default function ChessBoardComponent() {
  return (
    <div>
      <h1>chessboard</h1>
      <Chessboard position="start" width="300" />
    </div>
  );
}
