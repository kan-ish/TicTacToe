import { useState } from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe";
import ThemeContext from "./Contexts/ThemeContext";

function App() {
	const theme = useState("light");
	return (
		<div className="App">
			<header className="App-header">
				<ThemeContext.Provider value={theme}>
					<TicTacToe />
				</ThemeContext.Provider>
			</header>
		</div>
	);
}

export default App;
