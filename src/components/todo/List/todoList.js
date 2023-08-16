import { TodoApi } from "../../../services/todo/todoApi";
import useInputs from "../../../hook/useinputs";
import React, { useState } from "react";
import styled from "styled-components";

function TodoList({ todo, todoList, setTodoList }) {
  const [edit, setEdit] = useState(false);
  const [{ newTodo, isCompleteds }, onChangeNewTodo, setValues] = useInputs({
    newTodo: todo.todo,
    isCompleteds: todo.isCompleted,
  });
  const onChnageEdit = () => {
    setEdit(true);
  };

  const onCancleEdit = () => {
    setEdit(false);
    setValues({ newTodo: todo.todo });
  };

  const onDeleteTodo = async () => {
    try {
      const id = todo.id;
      const res = await TodoApi.deleteTodo({ id });
      if (res.status === 204) {
        const todoList_d = todoList.filter((todo) => todo.id !== id);
        setTodoList(todoList_d);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdateTodo = async () => {
    if (todo.todo === newTodo && todo.isCompleted === isCompleteds)
      return setEdit(false);
    try {
      const data = {
        todo: newTodo,
        isCompleted: isCompleteds,
      };

      const id = todo.id;

      const res = await TodoApi.updateTodo({ id, data });
      if (res.status === 200) {
        const { data } = res;
        const newTodoList = [...todoList];
        let todo = newTodoList.find((todo) => todo.id === data.id);
        todo.todo = data.todo;
        setTodoList(newTodoList);
        setEdit(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Label>
        <input
          name="isCompleteds"
          checked={isCompleteds}
          type="checkbox"
          onChange={onChangeNewTodo}
        />
        {edit ? (
          <input
            name="newTodo"
            value={newTodo}
            onChange={onChangeNewTodo}
            data-testid="modify-input"
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </Label>
      {edit ? (
        <>
          <Button primary onClick={onUpdateTodo} data-testid="submit-button">
            제출
          </Button>
          <Button danger onClick={onCancleEdit} data-testid="cancel-button">
            취소
          </Button>
        </>
      ) : (
        <>
          <Button primary onClick={onChnageEdit} data-testid="modify-button">
            수정
          </Button>
          <Button danger onClick={onDeleteTodo} data-testid="delete-button">
            삭제
          </Button>
        </>
      )}
    </>
  );
}

export default TodoList;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  input[type="checkbox"] {
    margin-right: 5px;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #3498db;
    border-radius: 3px;
    outline: none;
    position: relative;
    &:checked {
      background-color: #3498db;
      border: 2px solid #3498db;
      &:after {
        content: "\u2713";
        color: white;
        font-size: 12px;
        position: absolute;
        top: -2px;
        left: 3px;
      }
    }
  }
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? "#3498db" : props.danger ? "#e74c3c" : "#2ecc71"};
  color: white;
  &:last-child {
    margin-right: 0;
  }
`;
