import { useContext, useState } from "react";
import Mark from "../components/Mark";
import StartScreen from "../components/StartScreen";
import GameContext from "../store/GameContext";

function Gameboard() {
	const emptyBoard = [
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, -1, -1],
	]; // -1 empty; 0 - O; 1 - X;

	const gameCtx = useContext(GameContext);

	const [gameOver, setGameOver] = useState(false);
	const [gameData, setGameData] = useState({
		player1Wins: 0,
		player2Wins: 0,
		ties: 0,
	});
	const [board, setBoard] = useState(emptyBoard);

	const [xTurn, setXTurn] = useState(true);
	const [turns, setTurns] = useState(8);

	const placeMarker = (row, index, markNumber) => {
		if (markNumber !== -1) return;
		if (xTurn) {
			board[row][index] = 1;
		} else {
			board[row][index] = 0;
		}
		setBoard([...board]);

		const winner = checkVictory();
		if (winner === 0) {
			setGameData({ ...gameData, player2Wins: gameData.player2Wins + 1 });
			setGameOver(true);
			console.log("O WINS");
		} else if (winner === 1) {
			setGameData({ ...gameData, player1Wins: gameData.player1Wins + 1 });
			setGameOver(true);
			console.log("X WINS");
		} else if (turns === 0) {
			setGameData({ ...gameData, ties: gameData.ties + 1 });
			setGameOver(true);
			console.log("TIE");
		}
		setXTurn(!xTurn);
		setTurns(turns - 1);
	};

	const replay = () => {
		setTurns(8);
		setGameOver(false);
		setBoard(emptyBoard);
	};

	/* Prolly saab paremini ja ilusamalt teha */
	const checkVictory = () => {
		// First diagonal
		if (board[0][0] !== -1 || board[1][1] !== -1 || board[2][2] !== -1) {
			if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
				if (board[0][0] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Second diagonal
		if (board[0][2] !== -1 || board[1][1] !== -1 || board[2][0] !== -1) {
			if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
				if (board[0][2] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Check first row
		if (board[0][0] !== -1 || board[0][1] !== -1 || board[0][2] !== -1) {
			if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
				if (board[0][0] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Check second row
		if (board[1][0] !== -1 || board[1][1] !== -1 || board[1][2] !== -1) {
			if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
				if (board[1][0] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Check third row
		if (board[2][0] !== -1 || board[2][1] !== -1 || board[2][2] !== -1) {
			if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
				if (board[2][0] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Check first col
		if (board[0][0] !== -1 || board[1][0] !== -1 || board[2][0] !== -1) {
			if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
				if (board[0][0] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Check second col
		if (board[0][1] !== -1 || board[1][1] !== -1 || board[2][1] !== -1) {
			if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
				if (board[0][1] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}

		// Check third col
		if (board[0][2] !== -1 || board[1][2] !== -1 || board[2][2] !== -1) {
			if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
				if (board[0][2] === 1) {
					return 1;
				} else {
					return 0;
				}
			}
		}
	};

	// Kontrollida, kas mängija nimed on sisestatud
	if (gameCtx.player1Data.name === "" || gameCtx.player2Data.name === "") {
		return (
			<div className="start-screen">
				<StartScreen />
			</div>
		);
	}

	return (
		<div className="board">
			<table>
				<button className={gameOver ? "replay-btn" : "hide"} onClick={replay}>
					REPLAY
				</button>
				<tbody>
					<tr className="first-row">
						{board[0].map((element, i) => (
							<td key={i} onClick={() => placeMarker(0, i, element)}>
								<Mark markNumber={element} />
							</td>
						))}
					</tr>
					<tr className="second-row">
						{board[1].map((element, i) => (
							<td key={i} onClick={() => placeMarker(1, i, element)}>
								<Mark markNumber={element} />
							</td>
						))}
					</tr>
					<tr className="third-row">
						{board[2].map((element, i) => (
							<td key={i} onClick={() => placeMarker(2, i, element)}>
								<Mark markNumber={element} />
							</td>
						))}
					</tr>
				</tbody>
			</table>
			<div className="info">
				<div className={xTurn || gameOver ? "active" : undefined}>
					<div className="score">{gameData.player1Wins}</div>
					<div>PLAYER 1 (X)</div>
					<div>{gameCtx.player1Data.name}</div>
				</div>
				<div className={gameOver ? "active" : undefined}>
					<div className="score">{gameData.ties}</div>
					<div>TIE</div>
				</div>
				<div className={!xTurn || gameOver ? "active" : undefined}>
					<div className="score">{gameData.player2Wins}</div>
					<div>PLAYER 2 (O)</div>
					<div>{gameCtx.player2Data.name}</div>
				</div>
			</div>
		</div>
	);
}

export default Gameboard;
