import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Reset = ({ winner, resetGame, setWinner, setCellContents }) => {
	const [theme] = useContext(ThemeContext);
	return (
		<div>
			{winner ? (
				<button
					className={`reset-game ${theme}`}
					onClick={() => {
						resetGame(setWinner, setCellContents);
					}}
				>
					Play again!
				</button>
			) : null}
		</div>
	);
};

export default Reset;
