import configReducer from "./config";
import counterReducer from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  configReducer,
  counterReducer,
});

export default rootReducer;
