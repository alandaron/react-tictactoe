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

	const placeMarker = (row, index, markNumber) => {
		if (markNumber !== -1) return;
		if (xTurn) {
			board[row][index] = 1;
		} else {
			board[row][index] = 0;
		}
		setXTurn(!xTurn);
		setBoard([...board]);
	};

	return (
		<div className="board">
			<table>
				<tr class="first-row">
					{board[0].map((element, i) => (
						<td onClick={() => placeMarker(0, i, element)}>
							<Mark markNumber={element} />
						</td>
					))}
				</tr>
				<tr class="second-row">
					{board[1].map((element, i) => (
						<td onClick={() => placeMarker(1, i, element)}>
							<Mark markNumber={element} />
						</td>
					))}
				</tr>
				<tr class="third-row">
					{board[2].map((element, i) => (
						<td onClick={() => placeMarker(2, i, element)}>
							<Mark markNumber={element} />
						</td>
					))}
				</tr>
			</table>
		</div>
	);
}

export default App;
