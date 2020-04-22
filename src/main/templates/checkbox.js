import { QUESTION_ANSWERED } from "../constants";

export default (option, inputId, helpers) => {
	let { name, value, label } = option;
	const { dispatch } = helpers;
	return (
		<div
			className="ssa-option --checkbox"
			on-click={(e) => {
				if (e.target.tagName != "INPUT" && e.target.tagName != "LABEL")
					e.target.querySelector("input").click();
			}}
			key={inputId}
		>
			<div className="ssa-option-input">
				<input
					type="checkbox"
					id={inputId}
					name={name}
					value={value}
					on-change={(e) => {
						//Fired only when this value is selected.
						dispatch(QUESTION_ANSWERED, {
							...option,
							selected: e.target.checked,
						});
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
