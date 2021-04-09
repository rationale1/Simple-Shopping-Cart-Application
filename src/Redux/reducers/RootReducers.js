import { combineReducers } from "redux";
// import notes from "./notesReducer";
// import inputs from "./InputReducer";
import EmpReducer from "./EmpReducer";

const rooterReducers = combineReducers({
  EmpReducer,
});

export default rooterReducers;
