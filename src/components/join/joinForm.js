import React from "react";
import styled from "styled-components";
import useHomeRegexp from "../../hook/useHomeRegexp";
import useInputs from "../../hook/useinputs";
import { AuthApi } from "../../services/auth/authApi";
import { useNavigate } from "react-router-dom";
import useRedirect from "../../hook/useAuthRedirect";

function JoinForm() {
  //Hook을 이용한 todo 이동
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
        <button data-testid="signup-button" disabled={disabled}>
          회원가입
        </button>
      </form>
    </Wrapper>
  );
}

export default JoinForm;

const Wrapper = styled.div`
  display: block;
`;
