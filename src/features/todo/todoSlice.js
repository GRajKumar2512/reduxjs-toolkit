import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // redux behind the scenes links this state with the initial state

    addTodo: (state, action) => {
      // with action first create the item which we want to add
      const singleTodo = {
        id: nanoid(),
        text: action.payload,
      };

      // using the state then add the item
      state.todos.push(singleTodo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
