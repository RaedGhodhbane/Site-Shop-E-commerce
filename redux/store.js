import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// , composeWithDevTools()
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// => redux 1/actions  // 2 reducers
