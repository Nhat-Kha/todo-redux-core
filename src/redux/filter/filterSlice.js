const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filterSlice = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/statusTodo":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/priorityTodo":
      return {
        ...state,
        priority: action.payload,
      };

    default:
      return state;
  }
};

export default filterSlice;
