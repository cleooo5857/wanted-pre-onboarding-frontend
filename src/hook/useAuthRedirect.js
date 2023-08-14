import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenRepository } from "../repository/TokenRepository";

function useRedirect(redirectTo) {
  const navigate = useNavigate();
  // 로컬스토리지에 token 있는지 확인
  useEffect(() => {
    if (TokenRepository.getToken()) {
      navigate(redirectTo, { replace: true });
    }
  }, []);
}

export default useRedirect;
