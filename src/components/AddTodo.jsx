import React, { useState } from "react";
import { useDispatch } from "react-redux"; // to post something
import { addTodo } from "../features/todo/todoSlice"; // method to post the data

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form className="space-x-3 mt-12" onSubmit={addTodoHandler}>
        <input
          type="text"
          className="py-1 px-3 bg-gray-800 border border-gray-700 rounded-sm text-white"
          placeholder="add something to the list"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-green-500 py-1 px-3 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
