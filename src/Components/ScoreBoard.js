// import { useEffect, useContext, useState } from "react";
// import ThemeContext from "../Contexts/ThemeContext";

// if (!localStorage.getItem("scores")) {
// 	localStorage.setItem("scores", JSON.stringify({ X: 0, O: 0 }));
// }

// const ScoreBoard = ({ winner, setWinner }) => {
// 	const [theme] = useContext(ThemeContext);

// 	let scores = JSON.parse(localStorage.getItem("scores"));

// 	if (winner === "X") {
// 		scores.X += 1;
// 	} else if (winner === "O") {
// 		scores.O += 1;
// 	} else {
// 		// do nothing
// 	}

// 	// const resetScores = (scores) => {
// 	// 	// console.log(scores.X);
// 	// 	scores.X = 0;
// 	// 	// console.log(scores.O);
// 	// 	scores.O = 0;
// 	// 	// localStorage.setItem("scores", JSON.stringify(scores));
// 	// };

// 	useEffect(() => {
// 		localStorage.setItem("scores", JSON.stringify(scores));
// 	}, [scores]);

// 	return (
// 		<div>
// 			<table className="score-board">
// 				<thead>
// 					<tr>
// 						<th>Total</th>
// 						<th>X</th>
// 						<th>O</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<td id="total">{scores.X + scores.O}</td>
// 						<td id="X">{scores.X}</td>
// 						<td id="O">{scores.O}</td>
// 					</tr>
// 				</tbody>
// 			</table>
// 			<button className={`reset-scores ${theme}`}>Reset score-board</button>
// 		</div>
// 	);
// };

// export default ScoreBoard;
