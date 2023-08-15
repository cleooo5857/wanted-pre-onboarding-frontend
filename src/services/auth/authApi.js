import { axiosInstance } from "..";

const path = "/auth";

export const AuthApi = {
  login: ({ email, password }) => {
    return axiosInstance.post(path + "/signin", { email, password });
  },

  signup: ({ email, password }) => {
    return axiosInstance.post(path + "/signup", { email, password });
  },
};
