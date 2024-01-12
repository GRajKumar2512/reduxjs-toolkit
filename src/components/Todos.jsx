import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-[40%]">
      {todos.map((todo) => (
        <div className="flex items-center justify-center gap-1" key={todo.id}>
          <div className="border border-gray-700 bg-gray-800 text-white py-1 px-3 w-fit my-1">
            {todo.text}
          </div>
          <button
            className="bg-red-500 text-white py-1 px-3"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
