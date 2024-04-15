import { combineReducers } from "redux";
import accountReducer from "./account/accountSlice";

const rootReducer = combineReducers({
  user: accountReducer,
});

export default rootReducer;
