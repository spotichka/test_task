import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import employeesReducer from "./employeesReducer";

let reduser = employeesReducer;

let store = createStore(reduser, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
