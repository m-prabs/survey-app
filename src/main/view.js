import PagiTemplate from "./templates/pagination";
import QuestionTemplate from "./templates/question";
import SubmitTemplate from "./templates/submit";

export default (state, helpers) => {
	const { questions } = state;
	if (!questions || !questions.length) return;
	return (
		<div className="sn-survey-app-ssa">
			<div className="ssa-container">
				<div className="ssa-nav"></div>
				<div className="ssa-main">
					<div className="ssa-content">
						<div className="ssa-card">
							{state.onSubmitPage ? null : (
								<div className="ssa-card-status">
									<div className="ssa-status">
										<span>Servicenow Survey</span>
										<span>
											<span className="ssa-status-number">
												{state.totalIndex - state.currentIndex}
											</span>{" "}
											question
											{state.totalIndex - state.currentIndex == 1
												? ""
												: "s"}{" "}
											left
										</span>
									</div>
								</div>
							)}
							{state.onSubmitPage
								? SubmitTemplate(state, helpers)
								: QuestionTemplate(state, helpers)}
						</div>
					</div>
					{state.onSubmitPage ? null : (
						<div className="ssa-pagination">{PagiTemplate(state, helpers)}</div>
					)}
				</div>
			</div>
		</div>
	);
};
