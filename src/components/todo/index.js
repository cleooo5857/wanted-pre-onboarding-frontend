import React, { useEffect, useState } from "react";
import TodoList from "./List/todoList";
import TodoForm from "./Form/todoForm";
import { TodoApi } from "../../services/todo/todoApi";

function TodoIndex() {
  const [todoList, setTodoList] = useState([]);
  const [Landing, setLanding] = useState(false);

  useEffect(() => {
    async function getTodoList() {
      try {
        const res = await TodoApi.getTodos();
        setTodoList(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getTodoList();
  }, []);

  useEffect(() => {}, [Landing]);

  return (
    <>
      <TodoForm
        todoList={todoList}
        setTodoList={setTodoList}
        Landing={Landing}
      />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <TodoList
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoIndex;
