import React from "react";
import styled from "styled-components";
import useInputs from "../../hook/useinputs";
import { AuthApi } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import { TokenRepository } from "../../repository/TokenRepository";
import useRedirect from "../../hook/useAuthRedirect";
import useHomeRegexp from "../../hook/useHomeRegexp";

function LoginForm() {
  useRedirect("/todo");
  const naviate = useNavigate();
  const [{ email, password }, onChangeForm] = useInputs({
    email: "",
    password: "",
  });
  // 유효성 검사 @, 비밀번호 8글자 이상 포함
  const disabled = useHomeRegexp(email, password);

  const onJoinSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthApi.login({ email, password });
      console.log(res);
      if (res.status === 200) {
        TokenRepository.setToken(res.data.access_token);
        if (TokenRepository.getToken()) {
          naviate("/todo", { replace: true });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={onJoinSubmit}>
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
        <Button data-testid="signin-button" disabled={disabled}>
          로그인
        </Button>
      </FormContainer>
    </Wrapper>
  );
}

export default LoginForm;

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
