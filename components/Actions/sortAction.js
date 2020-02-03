import { SORT_PRODUCTS } from "./types";

export const sortedItems = {
	SORT_BY_ID: "SORT_BY_ID",
	SORT_LOW: "SORT_LOW",
	SORT_HIGH: "SORT_HIGH"
};

export const sortProducts = (items, sort) => {
	const products = items.slice();
	if (sort !== "SORT_BY_ID") {
		products.sort((a, b) =>
			sort === "SORT_LOW"
				? a.price > b.price
					? 1
					: -1
				: a.price < b.price
				? 1
				: -1
		);
	} else {
		products.sort((a, b) => (a.id > b.id ? 1 : -1));
	}
	return {
		type: SORT_PRODUCTS,
		payload: {
			sort: sort,
			products: products
		}
	};
};
