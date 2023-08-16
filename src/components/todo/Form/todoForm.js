import React from "react";
import { TodoApi } from "../../../services/todo/todoApi";
import useInputs from "../../../hook/useinputs";
import styled from "styled-components";

function TodoForm({ todoList, setTodoList }) {
  const [{ todo }, onChangeTodo, setValues] = useInputs("");

  const onClickAddBtn = async () => {
    try {
      const res = await TodoApi.createTodo({ todo });
      setTodoList([...todoList, res.data]);
      setValues({ todo: "" });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <FormContainer>
      <Input
        data-testid="new-todo-input"
        name="todo"
        value={todo}
        onChange={onChangeTodo}
        placeholder="Enter your todo..."
      />
      <Button onClick={onClickAddBtn} data-testid="new-todo-add-button">
        추가
      </Button>
    </FormContainer>
  );
}

export default TodoForm;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2581b6;
  }
`;
