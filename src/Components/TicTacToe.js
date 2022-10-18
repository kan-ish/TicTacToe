import { useState } from "react";
import Cell from "./Cell";

const Game = () => {
	const [whosTurn, setWhosTurn] = useState("X");
	const [cellContents, SetCellContents] = useState(Array(9).fill(""));
	const [winner, setWinner] = useState("");

	const cells = [...cellContents];

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
			if (!cells[num]) {
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
		<div>
			Next player: {whosTurn}
			<table>
				<tbody>
					<tr>
						<Cell
							num={0}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
						<Cell
							num={1}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
						<Cell
							num={2}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
					</tr>
					<tr>
						<Cell
							num={3}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
						<Cell
							num={4}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
						<Cell
							num={5}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
					</tr>
					<tr>
						<Cell
							num={6}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
						<Cell
							num={7}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
						<Cell
							num={8}
							cellContents={cellContents}
							handleClick={handleClick}
						/>
					</tr>
				</tbody>
			</table>
			<div className="gameOver">
				{winner ? (
					<div>
						{winner === "X" || winner === "O" ? (
							<div>{winner} Wins!</div>
						) : winner === "Draw" ? (
							<div>It's a Draw!</div>
						) : null}
						<button className="reset" onClick={reset}>
							Play again!
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Game;
