const TOKEN_KEY = "tokden";

export const TokenRepository = {
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  removeToken: (removetoken) => {
    return localStorage.removeItem(TOKEN_KEY, removetoken);
  },
};
