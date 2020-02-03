import { FETCH_PRODUCTS } from "../Actions/types";
import store from "../Store";

export function sortMaiddleware({ getState, dispatch }) {
	return function(next) {
		return function(action) {
			//
			if (action.type === FETCH_PRODUCTS) {
				//
				const Sorting = store.getState();
				if (Sorting.sort !== "SORT_BY_ID") {
					action.payload.sort((a, b) =>
						Sorting.sort === "SORT_LOW"
							? a.price > b.price
								? 1
								: -1
							: a.price < b.price
							? 1
							: -1
					);
				} else {
					action.payload.sort((a, b) => (a.id > b.id ? 1 : -1));
				}

				return { products: Sorting.products };
				//
			}
			return next(action);
		};
	};
}
