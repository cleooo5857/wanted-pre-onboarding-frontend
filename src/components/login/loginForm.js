import React, { useEffect } from "react";
import styled from "styled-components";
import useInputs from "../../hook/useinputs";
import { AuthApi } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import { TokenRepository } from "../../repository/TokenRepository";
import useRedirect from "../../hook/useAuthRedirect";

function LoginForm() {
  useRedirect("/todo");
  const naviate = useNavigate();
  const [{ email, password }, onChangeForm] = useInputs({
    email: "",
    password: "",
  });

  const onjoinSubmit = async (e) => {
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
      <form onSubmit={onjoinSubmit}>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={onChangeForm}
          placeholder="email"
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={onChangeForm}
          placeholder="password"
        />
        <button data-testid="signin-button">로그인</button>
      </form>
    </Wrapper>
  );
}

export default LoginForm;

const Wrapper = styled.div`
  display: block;
`;
