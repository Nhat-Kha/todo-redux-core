// REDUX CORE

// import { legacy_createStore as createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

// REDUX-TOOLKIT

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";
import todosSlice from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice,
    todoList: todosSlice,
  },
});

export default store;
