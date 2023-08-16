import React from "react";
import styled from "styled-components";
import useHomeRegexp from "../../hook/useHomeRegexp";
import useInputs from "../../hook/useinputs";
import { AuthApi } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import useRedirect from "../../hook/useAuthRedirect";

function JoinForm() {
  // Hook을 이용한 todo 이동
  useRedirect("/todo");
  const naviate = useNavigate();
  const [{ email, password }, onChangeForm] = useInputs({
    email: "",
    password: "",
  });

  // 유효성 검사 @, 비밀번호 8글자 이상 포함
  const disabled = useHomeRegexp(email, password);
  const onjoinSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthApi.signup({ email, password });
      alert("회원가입 성공했습니다.");
      naviate("/signin", { replace: false });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={onjoinSubmit}>
        <Input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={onChangeForm}
          placeholder="Email"
        />
        <Input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={onChangeForm}
          placeholder="Password"
        />
        <Button data-testid="signup-button" disabled={disabled}>
          회원가입
        </Button>
      </FormContainer>
    </Wrapper>
  );
}

export default JoinForm;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#3498db")};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#2581b6")};
  }
`;
