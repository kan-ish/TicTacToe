import { useContext, useState } from "react";
import Board from "./Board";
import GameStatus from "./GameStatus";
import Reset from "./Reset";
import { winningLogic, toggleTurn, reset } from "../gameLogic/gameLogic";
import ThemeContext from "../Contexts/ThemeContext";
import darkmodeToggle from "../darkmode_toggle.png";

const TicTacToe = () => {
	const [whosTurn, setWhosTurn] = useState("X");
	const [cellContents, setCellContents] = useState(Array(9).fill(""));
	const [winner, setWinner] = useState("");
	const [theme, setTheme] = useContext(ThemeContext);

	const cells = [...cellContents];

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	const handleClick = (num) => {
		if (!winner) {
			// to freeze game when there is a winner or it's a draw
			if (!cells[num]) {
				// to check if the cell is not already filled
				cells[num] = whosTurn;
				setCellContents(cells);
				toggleTurn(whosTurn, setWhosTurn);
			}

			winningLogic(cells, setWinner);
		}
	};

	return (
		<div id="envelope" className={theme}>
			<GameStatus winner={winner} whosTurn={whosTurn} />
			<Board cells={cells} handleClick={handleClick} />
			<Reset
				winner={winner}
				reset={reset}
				setWinner={setWinner}
				setCellContents={setCellContents}
			/>
			<div className="darkmode-toggle" onClick={toggleTheme}>
				<img src={darkmodeToggle} />
				<div id="togglehandle" className={theme}></div>
			</div>
		</div>
	);
};

export default TicTacToe;
