import { LOAD_NEXT_QUESTION, LOAD_PREV_QUESTION } from "../constants";

export default (state, helpers) => {
	const { dispatch } = helpers;
	return (
		<div className="ssa-pagination-btns">
			<button
				disabled={state.currentIndex == 0}
				className={
					"ssa-btn " + (state.currentIndex == 0 ? "--disabled" : "--prev")
				}
				on-click={() => dispatch(LOAD_PREV_QUESTION)}
			>
				<span>Previous</span>
			</button>
			{state.currentIndex == state.totalIndex ? (
				<button
					className="ssa-btn --done"
					on-click={() => dispatch(LOAD_NEXT_QUESTION)}
				>
					Done
				</button>
			) : (
				<button
					className="ssa-btn --next"
					on-click={() => dispatch(LOAD_NEXT_QUESTION)}
				>
					<span>Next</span>
				</button>
			)}
		</div>
	);
};
