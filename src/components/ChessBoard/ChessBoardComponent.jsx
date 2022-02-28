import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import PropTypes from 'prop-types';
import { Chess } from 'chess.js';

export default function ChessBoardComponent() {
  class PVP extends Component {
    static propTypes = { children: PropTypes.func };
    state = {
      fen: 'start',
      pieceSquare: '',
      square: '',
      history: [],
    };
    componentDidMount() {
      this.game = new Chess();
    }

    onDrop = ({ sourceSquare, targetSquare }) => {
      let move = this.game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (move === null) return;
      this.setState(({ history, pieceSquare }) => ({
        fen: this.game.fen(),
        history: this.game.history({ verbose: true }),
      }));
    };

    onMouseOverSquare = (square) => {
      let moves = this.game.moves({
        square: square,
        verbose: true,
      });
      if (moves.length === 0) return;
    };

    onSquareClick = (square) => {
      this.setState(({ history }) => ({
        pieceSquare: square,
      }));
      let move = this.game.move({
        from: this.state.pieceSquare,
        to: square,
      });
      if (move === null) return;
      this.setState({
        fen: this.game.fen(),
        history: this.game.history({ verbose: true }),
        pieceSquare: '',
      });
    };
  }

  return (
    <div>
      <h1>chessboard</h1>
      <Chessboard position="start" width="300" />
    </div>
  );
}
