import { combineReducers } from "redux";
import productReducer from "./productReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
	products: productReducer
	//,sort: sortReducer
});

export default rootReducer;
