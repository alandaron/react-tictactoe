import { useState } from "react";
import "./App.css";
import Mark from "./components/Mark";

function App() {
	const [board, setBoard] = useState([
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, -1, -1],
	]); // -1 empty; 0 - O; 1 - X;

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
			console.log("O WINS");
		} else if (winner === 1) {
			console.log("X WINS");
		} else if (turns === 0) {
			console.log("TIE");
		}
		setXTurn(!xTurn);
		setTurns(turns - 1);
	};

	/* Prolly saab paremini ja ilusamalt teha */
	const checkVictory = () => {
		// First diagonal
		if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
			if (board[0][0] === -1 || board[1][1] === -1 || board[2][2] === -1)
				return -1;

			if (board[0][0] === 1) {
				return 1;
			} else {
				return 0;
			}
		}

		// Second diagonal
		if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
			if (board[0][2] === -1 || board[1][1] === -1 || board[2][0] === -1)
				return -1;

			if (board[0][2] === 1) {
				return 1;
			} else {
				return 0;
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

	return (
		<div className="board">
			<table>
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
		</div>
	);
}

export default App;
