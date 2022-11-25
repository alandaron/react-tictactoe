import { useContext, useRef } from "react";
import GameContext from "../store/GameContext";

function StartScreen() {
	const gameCtx = useContext(GameContext);
	const player1Name = useRef();
	const player2Name = useRef();

	const startGame = () => {
		gameCtx.changePlayer1Name(player1Name.current.value);
		gameCtx.changePlayer2Name(player2Name.current.value);
	};

	return (
		<>
			<label>Player 1</label>
			<br />
			<input ref={player1Name} type="text" />
			<br />
			<label>Player 2</label>
			<br />
			<input ref={player2Name} type="text" />
			<br />
			<button onClick={startGame}>Start Game</button>
		</>
	);
}

export default StartScreen;
