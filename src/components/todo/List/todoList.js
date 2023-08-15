import { TodoApi } from "../../../services/todo/todoApi";
import useInputs from "../../../hook/useinputs";
import React, { useState } from "react";

function TodoList({ todo, todoList, setTodoList }) {
  const [edit, setEdit] = useState(false);
  const [{ newTodo }, onChangeNewTodo, setValues] = useInputs({
    newTodo: todo.todo,
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
      // console.log(res);
      const todoList_d = todoList.filter((todo) => todo.id !== res.data.data);
      setTodoList(todoList_d);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(newTodo);

  const onUpdateTodo = async () => {
    if (todo.todo === newTodo) return setEdit(false);
    try {
      const data = {
        todo: newTodo,
        isCompleted: todo.isCompleted,
      };

      const id = todo.id;

      const res = await TodoApi.updateTodo({ id, data });
      console.log(res);
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

  // const onUpdateFlag = async () => {

  //   try {
  //     const data = {
  //       content: todo.content,
  //       flag: !todo.flag,
  //     };
  //     const id = todo.id;

  //     const res = await TodoApi.updateTodo({ id, data });
  //     if (res.status === 200) {
  //       const { data } = res.data;
  //       const newTodoList = [...todoList];
  //       let todo = newTodoList.find((todo) => todo.id === data.id);
  //       todo.flag = data.flag;
  //       setTodoList(newTodoList);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <label>
        <input type="checkbox" />
        {edit ? (
          <input
            name="newTodo"
            value={newTodo}
            onChange={onChangeNewTodo}
            data-testid="modify-input"
          ></input>
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      {!edit && (
        <button onClick={onChnageEdit} data-testid="modify-button">
          수정
        </button>
      )}
      {!edit && (
        <button onClick={onDeleteTodo} data-testid="delete-button">
          삭제
        </button>
      )}
      {edit && (
        <button onClick={onUpdateTodo} data-testid="submit-button">
          제출
        </button>
      )}
      {edit && (
        <button onClick={onCancleEdit} data-testid="cancel-button">
          취소
        </button>
      )}
    </>
  );
}

export default TodoList;
