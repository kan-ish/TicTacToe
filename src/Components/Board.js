import Cell from "./Cell";

const Board = ({ cellContents, handleClick }) => {
	return (
		<div>
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
		</div>
	);
};

export default Board;
