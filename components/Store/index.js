import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "../Reducers";
import productReducer from "../Reducers/productReducer";
import { sortMaiddleware } from "../Middleware";

//const initialState = {};
//const middleware = [thunk];
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	productReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
