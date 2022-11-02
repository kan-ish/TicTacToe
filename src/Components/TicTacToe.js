import { useContext, useState } from "react";
import GameBoard from "./GameBoard";
import GameStatus from "./GameStatus";
import ResetGame from "./ResetGame";
import ScoreBoard from "./ScoreBoard";
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
			<div id="game">
				<GameStatus winner={winner} whosTurn={whosTurn} />
				<GameBoard cells={cells} handleClick={handleClick} />
				<ResetGame
					winner={winner}
					reset={reset}
					setWinner={setWinner}
					setCellContents={setCellContents}
				/>
			</div>
			{/* <div id="scores">
				<ScoreBoard winner={winner} />
			</div> */}
			<div className="darkmode-toggle" onClick={toggleTheme}>
				<img src={darkmodeToggle} />
				<div id="togglehandle" className={theme}></div>
			</div>
		</div>
	);
};

export default TicTacToe;
