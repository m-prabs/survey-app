import { GLOBAL_UTIL } from "../constants";

const randId = () =>
	Math.random().toString(36).substring(2) +
	Math.random().toString(36).substring(2);

global[GLOBAL_UTIL] = global[GLOBAL_UTIL] || {
	generateId: () => randId(),
};
