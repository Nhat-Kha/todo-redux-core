// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filterSlice = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchTodo":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusTodo":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/priorityTodo":
//       return {
//         ...state,
//         priority: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filterSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchTodo: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    },
    statusTodo: (state, action) => {
      state.status = action.payload;
    },
    priorityTodo: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { searchTodo, statusTodo, priorityTodo } = filterSlice.actions;

export default filterSlice.reducer;
