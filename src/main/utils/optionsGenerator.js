import radioTemplate from "../templates/radio";
import checkboxTemplate from "../templates/checkbox";
import textTemplate from "../templates/text";
import ratingTemplate from "../templates/rating";
import {
	GLOBAL_UTIL,
	TYPE_SINGLE_SELECT,
	TYPE_MULTI_SELECT,
	TYPE_TEXT,
	TYPE_RATING,
} from "../constants";

const { generateId } = global[GLOBAL_UTIL];

export default (question, helpers) => {
	let options;
	if (question.type.toUpperCase() == TYPE_SINGLE_SELECT)
		options = question.options.map((o) =>
			radioTemplate(o, generateId(), helpers)
		);
	else if (question.type.toUpperCase() == TYPE_MULTI_SELECT)
		options = question.options.map((o) =>
			checkboxTemplate(o, generateId(), helpers)
		);
	else if (question.type.toUpperCase() == TYPE_TEXT)
		options = textTemplate(question, generateId(), helpers);
	else if (question.type.toUpperCase() == TYPE_RATING)
		options = ratingTemplate(question, generateId(), helpers);

	return options;
};
