import * as redux from "redux";
import { toDoReducer } from "./reducers/todoReducer";

//Creating Store
export const store = redux.createStore(toDoReducer);
