import { createStore, combineReducers, compose } from "redux";
import classesReducer from "../redux/classes.reducer";

// reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const rootReducer = combineReducers({
  classes: classesReducer,
});

export const store = createStore(rootReducer, composeEnhancers());
