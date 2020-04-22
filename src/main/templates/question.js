import OptionsGenerator from "../utils/optionsGenerator";

export default (state, helpers) => {
	const { activeQuestion } = state;
	return (
		<div className="ssa-card-question">
			<div className="ssa-qs-text">
				<h2>{activeQuestion.questionText}</h2>
			</div>
			<div className="ssa-qs-options">
				<div className="ssa-options">
					{OptionsGenerator(activeQuestion, helpers)}
				</div>
			</div>
		</div>
	);
};
