const initState = [
  { id: 1, name: "learn java", completed: false, priority: "low" },
  { id: 2, name: "learn javascript", completed: true, priority: "Medium" },
  { id: 3, name: "learn Redux", completed: true, priority: "High" },
];

const todosSlice = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todosSlice;
