import React, { useEffect, useState } from "react";
import TodoList from "./List/todoList";
import TodoForm from "./Form/todoForm";
import { TodoApi } from "../../services/todo/todoApi";
import { styled } from "styled-components";
import { axiosInstance } from "../../services";

function TodoIndex() {
  const [todoList, setTodoList] = useState([]);

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

  return (
    <>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <ul>
        {todoList.map((todo) => (
          <S.TodoItem>
            <TodoList
              key={todo.id}
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </S.TodoItem>
        ))}
      </ul>
    </>
  );
}

export default TodoIndex;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const S = {
  TodoItem,
};
