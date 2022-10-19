import { useContext, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import Board from "./Board";
import darkmodeToggle from "../darkmode_toggle.png";

const TicTacToe = () => {
	const [whosTurn, setWhosTurn] = useState("X");
	const [cellContents, SetCellContents] = useState(Array(9).fill(""));
	const [winner, setWinner] = useState("");
	// const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useContext(ThemeContext);

	// console.log(themeContext.isLightTheme);

	const cells = [...cellContents];

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	const toggleTurn = () => {
		if (whosTurn === "X") {
			setWhosTurn("O");
		} else {
			setWhosTurn("X");
		}
	};

	const winningLogic = () => {
		const combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		if (cells.every((cell) => cell !== "")) {
			// if every cell is filled and no one won
			setWinner("Draw");
		}

		for (const key in combos) {
			combos[key].forEach((combo) => {
				if (
					cells[combo[0]] === "" ||
					cells[combo[1]] === "" ||
					cells[combo[2]] === ""
				) {
					// do nothing
				} else if (
					cells[combo[0]] === cells[combo[1]] &&
					cells[combo[0]] === cells[combo[2]]
				) {
					setWinner(cells[combo[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (!winner) {
			// to freeze game when there is a winner or it's a draw
			if (!cells[num]) {
				// to check if the cell is not already filled
				cells[num] = whosTurn;
				SetCellContents(cells);
				toggleTurn();
			}

			winningLogic();
		}
	};

	const reset = () => {
		setWinner("");
		SetCellContents(Array(9).fill(""));
		// setWhosTurn("X");
	};

	return (
		<envelope className={theme}>
			<div className="game-status">
				{winner ? (
					<div>
						{winner === "X" || winner === "O" ? (
							<div>{winner} Wins!</div>
						) : winner === "Draw" ? (
							<div>It&#39;s a Draw!</div>
						) : null}
					</div>
				) : (
					<div> Next player: {whosTurn}</div>
				)}
			</div>
			<Board cellContents={cellContents} handleClick={handleClick} />
			<div className="reset">
				{winner ? (
					<button className={theme} onClick={reset}>
						Play again!
					</button>
				) : null}
			</div>
			<div className="darkmode-toggle" onClick={toggleTheme}>
				<img src={darkmodeToggle} />
				<togglehandle className={theme}></togglehandle>
			</div>
		</envelope>
	);
};

export default TicTacToe;
