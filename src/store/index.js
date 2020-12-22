import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import articlesReducer from "./articles/reducer";


const store = createStore(
  combineReducers({articles: articlesReducer}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
