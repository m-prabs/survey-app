import { QUESTION_ANSWERED, GLOBAL_UTIL } from "../constants";

const { generateId } = global[GLOBAL_UTIL];
export default (question, inputId, { dispatch }) => {
	console.log(question);
	let helperObj = {
		listener: () => {},
		registerListener(fn) {
			this.listener = fn;
		},
		runListner() {
			this.listener();
		},
	};
	return (
		<div className="ssa-option --rating" key={inputId}>
			<fieldset className="ssa-rating">
				<legend>{question.count} indicates maximum</legend>
				<div
					className="ssa-rating-container"
					on-mouseleave={(e) => helperObj.runListner()}
				>
					{[...Array(question.count)].map((v, i) => {
						let eId = generateId();
						return (
							<span
								className={
									"ssa-rating-pill " +
									(!question.answer || question.answer < i + 1
										? ""
										: "--selected")
								}
								on-click={(e) => {
									if (
										e.target.tagName != "INPUT" &&
										e.target.tagName != "LABEL"
									)
										e.target.querySelector("input").click();
								}}
								key={eId}
							>
								<input
									type="radio"
									id={eId}
									name={question.questionId}
									value={i + 1}
									on-change={(e) => {
										//Fired only when THIS value is selected.
										let pill = e.target.closest(".ssa-rating-pill");
										Array.from(
											pill.closest(".ssa-rating-container").children
										).map((n) => n.classList.remove("--selected"));
										while (pill) {
											pill.classList.add("--selected");
											pill = pill.previousSibling;
										}
										let val = e.target.value;
										helperObj.registerListener(() => {
											dispatch(QUESTION_ANSWERED, Number(val));
										});
									}}
									checked={question.answer == i + 1}
								/>
								<label htmlFor={eId} title={i + 1}>
									{i + 1}
								</label>
							</span>
						);
					})}
				</div>
			</fieldset>
		</div>
	);
};
