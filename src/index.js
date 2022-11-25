import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GameContextProvider } from "./store/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GameContextProvider>
				<App />
			</GameContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
