import { actionTypes } from "@servicenow/ui-core";
import {
	LOAD_NEXT_QUESTION,
	QUESTION_ANSWERED,
	LOAD_PREV_QUESTION,
	TYPE_SINGLE_SELECT,
	TYPE_MULTI_SELECT,
	TYPE_TEXT,
	SUBMIT_SURVEY,
	GO_BACK,
	TYPE_RATING,
} from "./constants";

const loadQuestions = ({ state, updateState }) => {
	let questions = [...(state.properties.questions || [])];
	updateState({
		questions,
		totalIndex: questions.length - 1,
		activeQuestion: questions[0] || {},
		currentIndex: 0,
	});
};

const loadNextQuestion = ({ state, updateState }) => {
	let questions = state.questions.map((q) => {
		if (q.questionId == state.activeQuestion.questionId)
			return { ...state.activeQuestion };
		else return { ...q };
	});
	let currentIndex = -1,
		onSubmitPage = false,
		activeQuestion = null;
	if (state.currentIndex == state.totalIndex) {
		onSubmitPage = true;
	} else {
		currentIndex =
			state.currentIndex < state.totalIndex
				? state.currentIndex + 1
				: state.totalIndex;
		activeQuestion = questions[currentIndex];
	}
	updateState({
		questions,
		currentIndex,
		activeQuestion,
		onSubmitPage,
	});
};

const loadPrevQuestion = ({ state, updateState }) => {
	let questions = state.questions.map((q) => {
		if (q.questionId == state.activeQuestion.questionId)
			return { ...state.activeQuestion };
		else return { ...q };
	});
	let currentIndex = state.currentIndex > 0 ? state.currentIndex - 1 : 0,
		activeQuestion = state.questions[currentIndex];

	updateState({
		questions,
		currentIndex,
		activeQuestion,
	});
};

const recordAnswer = ({ action: { payload }, updateState, state }) => {
	let { activeQuestion } = state;
	let opts, answer;
	if (activeQuestion.type.toUpperCase() == TYPE_SINGLE_SELECT) {
		opts = activeQuestion.options.map((o) => {
			if (o.value == payload.value) o.selected = true;
			else o.selected = false;
			return { ...o };
		});
	} else if (activeQuestion.type.toUpperCase() == TYPE_MULTI_SELECT) {
		opts = activeQuestion.options.map((o) => {
			if (o.value == payload.value) o.selected = payload.selected;
			return { ...o };
		});
	} else if (
		[TYPE_TEXT, TYPE_RATING].includes(activeQuestion.type.toUpperCase())
	) {
		answer = payload;
	}
	updateState({
		activeQuestion: {
			...state.activeQuestion,
			options: opts,
			answer,
		},
	});
};

const submitSurvey = ({ state }) => {
	console.log(state);
};

const goBackToSurvey = ({ state, updateState }) => {
	updateState({
		activeQuestion: { ...state.questions[state.totalIndex] },
		currentIndex: state.totalIndex,
		onSubmitPage: false,
	});
};

const loadSubmitPage = ({ state, updateState }) => {
	updateState({
		activeQuestion: null,
		onSubmitPage: true,
	});
};

export default {
	[actionTypes.COMPONENT_DOM_READY]: loadQuestions,
	[LOAD_NEXT_QUESTION]: loadNextQuestion,
	[QUESTION_ANSWERED]: recordAnswer,
	[LOAD_PREV_QUESTION]: loadPrevQuestion,
	[SUBMIT_SURVEY]: submitSurvey,
	[GO_BACK]: goBackToSurvey,
};
