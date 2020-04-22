import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import { snabbdom } from "@servicenow/ui-renderer-snabbdom";
import { getQuestionList } from "./dateFetchers";
import "../main";

const view = (state) => {
	return <sn-survey questions={state.questions}></sn-survey>;
};

const fetchQuestions = ({ updateState }) => {
	const questions = getQuestionList();
	updateState({ questions });
};

createCustomElement("sn-survey-connected", {
	view,
	renderer: {
		type: snabbdom,
	},
	initialState: {
		questions: [],
	},
	actionHandlers: {
		[actionTypes.COMPONENT_DOM_READY]: fetchQuestions,
	},
});
