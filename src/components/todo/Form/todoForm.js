import React from "react";
import { TodoApi } from "../../../services/todo/todoApi";
import useInputs from "../../../hook/useinputs";

function TodoForm({ todoList, setTodoList }) {
  const [{ todo }, onChangeTodo, setTodo] = useInputs("");

  const onClickAddBtn = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const res = await TodoApi.createTodo({ todo });
      if (res.status === 201 && res.data && res.data.data) {
        setTodoList([...todoList, res.data.data]); // Use res.data.data as it seems to contain the actual todo data
        setTodo(""); // Reset the input after adding
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={onClickAddBtn}>
        <input
          data-testid="new-todo-input"
          name="todo"
          value={todo}
          onChange={onChangeTodo}
        />
        <button data-testid="new-todo-add-button" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
