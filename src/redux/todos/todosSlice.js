// const initState = [
//   { id: 1, name: "learn java", completed: false, priority: "low" },
//   { id: 2, name: "learn javascript", completed: true, priority: "Medium" },
//   { id: 3, name: "learn Redux", completed: true, priority: "High" },
// ];

// const todosSlice = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodo":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todosSlice;

import { createSlice } from "@reduxjs/toolkit";

// const initialState = ;

const todosSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn java", completed: false, priority: "low" },
    { id: 2, name: "learn javascript", completed: true, priority: "Medium" },
    { id: 3, name: "learn Redux", completed: true, priority: "High" },
  ],
  reducers: {
    addTodo: (state, action) => {
      console.log("state:", state);
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      console.log({ state, action });
      console.log("state:", state);
      const list = state.filter((todo) => todo.id === action.payload);

      if (list) {
        list.completed = !list.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
