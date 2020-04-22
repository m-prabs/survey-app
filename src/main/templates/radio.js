import { QUESTION_ANSWERED } from "../constants";

export default (option, inputId, helpers) => {
	let { name, value, label } = option;
	const { dispatch } = helpers;
	return (
		<div
			className="ssa-option --radio"
			on-click={(e) => {
				if (e.target.tagName != "INPUT" && e.target.tagName != "LABEL")
					e.target.querySelector("input").click();
			}}
			key={inputId}
		>
			<div className="ssa-option-input">
				<input
					type="radio"
					id={inputId}
					name={name}
					value={value}
					on-change={(e) => {
						//Fired only when THIS value is selected.
						dispatch(QUESTION_ANSWERED, option);
						console.log(e.target.value);
					}}
					checked={option.selected}
				/>
			</div>
			<div className="ssa-option-label">
				<label htmlFor={inputId}>{label}</label>
			</div>
		</div>
	);
};
