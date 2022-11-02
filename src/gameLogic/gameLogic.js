export const winningLogic = (cells, setWinner) => {
	let scores = JSON.parse(localStorage.getItem("scores"));

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
		scores.Draw += 1;
		localStorage.setItem("scores", JSON.stringify(scores));
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
				if (cells[combo[0]] === "X") {
					scores.X += 1;
				} else if (cells[combo[0]] === "O") {
					scores.O += 1;
				}
				localStorage.setItem("scores", JSON.stringify(scores));
			}
		});
	}
};

export const toggleTurn = (whosTurn, setWhosTurn) => {
	if (whosTurn === "X") {
		setWhosTurn("O");
	} else {
		setWhosTurn("X");
	}
};

export const resetGame = (setWinner, setCellContents) => {
	setWinner("");
	setCellContents(Array(9).fill(""));
	// setWhosTurn("X");
};
