
import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result) setWinner(result);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className={`cell ${value}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="info">
        {winner ? (
          <h2>Winner: {winner}</h2>
        ) : board.every((cell) => cell) ? (
          <h2>It's a Draw!</h2>
        ) : (
          <h2>Turn: {isXTurn ? "X" : "O"}</h2>
        )}
        <button onClick={resetGame} className="reset-button">Reset Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
