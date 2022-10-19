import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Cell = ({ num, cellContents, handleClick }) => {
	const [theme] = useContext(ThemeContext);

	const cells = [...cellContents];
	return (
		<td
			className={theme}
			onClick={() => {
				handleClick(num);
			}}
		>
			{cells[num]}
		</td>
	);
};

export default Cell;
