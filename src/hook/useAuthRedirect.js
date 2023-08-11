import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenRepository } from "../repository/TokenRepository";

function useRedirect(redirectTo) {
  const navigate = useNavigate();

  useEffect(() => {
    if (TokenRepository.getToken()) {
      navigate(redirectTo, { replace: true });
    }
  }, []);
}

export default useRedirect;
