import { FETCH_PRODUCTS } from "../Actions/types";
import { SORT_PRODUCTS } from "../Actions/types";
import { Source } from "../Source";

// const initialState = { items: [] };

// export default function(state = initialState, action) {
// 	switch (action.type) {
// 		case FETCH_PRODUCTS:
// 			return { ...state, items: action.payload };
// 		default:
// 			return state;
// 	}
// }
const initalState = {
	products: Source,
	sortedProducts: Source,
	sort: "SORT_BY_ID"
};
export default function(state = initalState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return initalState;
		case SORT_PRODUCTS:
			return {
				...state,
				sortedProducts: action.payload.products,
				sort: action.payload.sort
			};
		default:
			return state;
	}
}
