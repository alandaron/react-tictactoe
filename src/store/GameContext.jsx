import { createContext, useState } from "react";
const GameContext = createContext(null);

export const GameContextProvider = (props) => {
	const [gameData, setGameData] = useState({
		player1Wins: 0,
		player2Wins: 0,
		ties: 0,
	});
	const [player1Data, setPlayer1Data] = useState({
		wins: 0,
		losses: 0,
		name: "",
	});
	const [player2Data, setPlayer2Data] = useState({
		wins: 0,
		losses: 0,
		name: "",
	});

	const changePlayer1NameHandler = (newName) => {
		const newData = { ...player1Data, name: newName };
		setPlayer1Data(newData);
	};

	const changePlayer2NameHandler = (newName) => {
		const newData = { ...player2Data, name: newName };
		setPlayer2Data(newData);
	};

	return (
		<GameContext.Provider
			value={{
				gameData: gameData,
				setGameData: setGameData,
				player1Data: player1Data,
				player2Data: player2Data,
				changePlayer1Name: changePlayer1NameHandler,
				changePlayer2Name: changePlayer2NameHandler,
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};

export default GameContext;
