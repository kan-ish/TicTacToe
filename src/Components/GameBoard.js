import Cell from "./Cell";

const GameBoard = ({ cells, handleClick }) => {
	return (
		<div>
			<table className="game-board">
				<tbody>
					<tr>
						<Cell num={0} cells={cells} handleClick={handleClick} />
						<Cell num={1} cells={cells} handleClick={handleClick} />
						<Cell num={2} cells={cells} handleClick={handleClick} />
					</tr>
					<tr>
						<Cell num={3} cells={cells} handleClick={handleClick} />
						<Cell num={4} cells={cells} handleClick={handleClick} />
						<Cell num={5} cells={cells} handleClick={handleClick} />
					</tr>
					<tr>
						<Cell num={6} cells={cells} handleClick={handleClick} />
						<Cell num={7} cells={cells} handleClick={handleClick} />
						<Cell num={8} cells={cells} handleClick={handleClick} />
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default GameBoard;
