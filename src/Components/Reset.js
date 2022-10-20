import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Reset = ({ winner, reset, setWinner, setCellContents }) => {
	const [theme] = useContext(ThemeContext);
	return (
		<div className="reset">
			{winner ? (
				<button
					className={theme}
					onClick={() => {
						reset(setWinner, setCellContents);
					}}
				>
					Play again!
				</button>
			) : null}
		</div>
	);
};

export default Reset;
