const GameStatus = ({ winner, whosTurn }) => {
	return (
		<div className="game-status">
			{winner ? (
				<div>
					{winner === "X" || winner === "O" ? (
						<div>{winner} Wins!</div>
					) : winner === "Draw" ? (
						<div>It&#39;s a Draw!</div>
					) : null}
				</div>
			) : (
				<div> Next player: {whosTurn}</div>
			)}
		</div>
	);
};

export default GameStatus;
