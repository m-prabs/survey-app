import { QUESTION_ANSWERED } from "../constants";

export default (question, inputId, { dispatch }) => {
	return (
		<div className="ssa-option --textarea" key={inputId}>
			<div className="ssa-option-input">
				<textarea
					placeholder="Maximum 500 characters..."
					name={question.questionId}
					rows="7"
					maxlength="500"
					autofocus={true}
					on-change={(e) => {
						dispatch(QUESTION_ANSWERED, e.target.value);
						console.log(e, e.target.value);
					}}
					value={question.answer}
				></textarea>
			</div>
		</div>
	);
};
