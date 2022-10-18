const Cell = ({ num, cellContents, handleClick }) => {
	const cells = [...cellContents];
	return (
		<td
			className="cell"
			onClick={() => {
				handleClick(num);
			}}
		>
			{cells[num]}
		</td>
	);
};

export default Cell;
