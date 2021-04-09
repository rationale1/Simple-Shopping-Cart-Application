import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducers from "./reducers/RootReducers";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
