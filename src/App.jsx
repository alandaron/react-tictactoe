import { useState } from "react";
import "./App.css";
import Mark from "./components/Mark";

function App() {
	const [board, setBoard] = useState([
		[-1, -1, 1],
		[-1, -1, -1],
		[-1, -1, -1],
	]); // -1 empty; 0 - O; 1 - X;

	return (
		<div className="board">
			<table>
				<tr class="first-row">
					{board[0].map((element) => (
						<Mark markNumber={element} />
					))}
				</tr>
				<tr class="second-row">
					{board[1].map((element) => (
						<Mark markNumber={element} />
					))}
				</tr>
				<tr class="third-row">
					{board[2].map((element) => (
						<Mark markNumber={element} />
					))}
				</tr>
			</table>
		</div>
	);
}

export default App;
