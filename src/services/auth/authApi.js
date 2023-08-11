import Axios from "..";

const path = "/auth";

export const AuthApi = {
  login: ({ email, password }) => {
    return Axios.post(path + "/signin", { email, password });
  },

  signup: ({ email, password }) => {
    return Axios.post(path + "/signup", { email, password });
  },
};
