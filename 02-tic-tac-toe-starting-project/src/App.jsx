import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

/**
 *
 * @param {gameTurns} gameTurns
 * @returns
 */
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

/**
 *
 * @param {gameTurns} gameTurns
 * @returns
 */
const generateGameBoard = (gameTurns) => {
  const gameBoard = [...INITIAL_BOARD.map((board) => [...board])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

/**
 *
 * @param {gameBoard} gameBoard
 * @param {players} players
 * @returns
 */
const getWinnerSymbol = (gameBoard, players) => {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      return players[firstSymbol];
    }
  }

  return null;
};

/**
 *
 * @returns
 */
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = generateGameBoard(gameTurns);
  const winnerSymbol = getWinnerSymbol(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winnerSymbol;

  const handleSelectActivePlayer = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handleChangePlayerName = (playerSymbol, newName) => {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [playerSymbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handleChangePlayerName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handleChangePlayerName}
          />
        </ol>
        {(winnerSymbol || isDraw) && (
          <GameOver winner={winnerSymbol} onHandleRematch={handleRematch} />
        )}
        <GameBoard
          onSelectPlayer={handleSelectActivePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
