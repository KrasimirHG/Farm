import { SORT_PRODUCTS } from "../Actions/types";
import { Source } from "../Source";
import { sortedItems } from "../Actions/sortAction";

const { SORT_BY_ID } = sortedItems;

export default function(state = SORT_BY_ID, action) {
	switch (action.type) {
		case SORT_PRODUCTS:
			return action.sort;
		default:
			return state;
	}
}
