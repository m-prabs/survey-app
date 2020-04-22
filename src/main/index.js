import { createCustomElement } from "@servicenow/ui-core";
import { snabbdom } from "@servicenow/ui-renderer-snabbdom";
import "./utils/idGenerator";
import view from "./view";
import styles from "./styles/main.scss";
import actionHandlers from "./actions";

createCustomElement("sn-survey", {
	view,
	renderer: {
		type: snabbdom,
	},
	styles,
	initialState: {
		questions: [],
		totalIndex: -1,
		currentIndex: -1,
		activeQuestion: {},
		onSubmitPage: false,
	},
	properties: {
		questions: { required: true },
	},
	actionHandlers,
});
