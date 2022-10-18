import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  toDoReducer,
});

export default persistReducer(persistConfig, rootReducer);
