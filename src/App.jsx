import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Gameboard from "./pages/Gameboard";
import Scoreboard from "./pages/Scoreboard";

function App() {
	return (
		<div>
			<Routes>
				<Route path="" element={<Gameboard />} />
				<Route path="scoreboard" element={<Scoreboard />} />
			</Routes>
			<div className="nav">
				<Link to="/">
					<button>Gameboard</button>
				</Link>
				<Link to="/scoreboard">
					<button>Scoreboard</button>
				</Link>
			</div>
		</div>
	);
}

export default App;
