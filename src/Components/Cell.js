import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Cell = ({ num, cells, handleClick }) => {
	const [theme] = useContext(ThemeContext);

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
