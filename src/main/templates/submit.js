import { SUBMIT_SURVEY, GO_BACK } from "../constants";

export default (state, { dispatch }) => {
	return (
		<div className="ssa-card-submit">
			<div className="ssa-submit-text">
				<div>
					Thank you for your valuable feedback. Ready to submit the survey?
				</div>
			</div>
			<div className="ssa-submit-cta">
				<div className="ssa-cta">
					<button
						className="ssa-btn submit-card-btn --submit"
						on-click={() => dispatch(SUBMIT_SURVEY)}
					>
						Submit Survey
					</button>
				</div>
				<div className="ssa-cta">
					<button
						className="ssa-btn submit-card-btn --goback"
						on-click={() => dispatch(GO_BACK)}
					>
						<span>Go back</span>
					</button>
				</div>
			</div>
		</div>
	);
};
