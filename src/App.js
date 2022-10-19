import { useState } from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe";
import ThemeContext from "./Contexts/ThemeContext";
import bg from "./bg_image.jpg";

function App() {
	const theme = useState("light");
	return (
		<div className="App">
			<ThemeContext.Provider value={theme}>
				<TicTacToe />
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
