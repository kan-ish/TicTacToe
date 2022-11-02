import { useEffect, useContext, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";

if (!localStorage.getItem("scores")) {
	localStorage.setItem("scores", JSON.stringify({ X: 0, O: 0, Draw: 0 }));
}

const ScoreBoard = ({ reset, setWinner, setCellContents }) => {
	const [theme] = useContext(ThemeContext);

	let scores = JSON.parse(localStorage.getItem("scores"));

	const resetScores = () => {
		// console.log(scores.X);
		scores.X = 0;
		// console.log(scores.O);
		scores.O = 0;
		scores.Draw = 0;
		localStorage.setItem("scores", JSON.stringify(scores));

		reset(setWinner, setCellContents);
	};

	return (
		<div>
			<table className="score-board">
				<thead>
					<tr>
						<th>Total</th>
						<th>X</th>
						<th>O</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td id="total">{scores.X + scores.O + scores.Draw}</td>
						<td id="X">{scores.X}</td>
						<td id="O">{scores.O}</td>
					</tr>
				</tbody>
			</table>
			<button className={`reset-scores ${theme}`} onClick={resetScores}>
				Reset score-board
			</button>
		</div>
	);
};

export default ScoreBoard;
