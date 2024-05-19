import { combineReducers } from "redux";
import filterSlice from "./filter/filterSlice";
import todosSlice from "./todos/todosSlice";

const rootReducer = combineReducers({
  filters: filterSlice,
  todoList: todosSlice,
});

export default rootReducer;
