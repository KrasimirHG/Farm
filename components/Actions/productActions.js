//import Source from "../Source";
import { FETCH_PRODUCTS } from "./types";

// export const fetchProducts = () => dispatch => {
// 	return { type: FETCH_PRODUCTS, payload: Source };
// };

export const fetchProducts = payload => {
	return { type: FETCH_PRODUCTS, payload };
};
