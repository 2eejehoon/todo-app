import { combineReducers } from "redux";
import todoReducer from "./reducers";

const rootReducer = combineReducers({ todoReducer });

export default rootReducer;
