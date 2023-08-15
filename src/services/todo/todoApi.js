import { axiosInstance } from "..";

const path = "/todos";

export const TodoApi = {
  getTodos: () => {
    return axiosInstance.get(path);
  },
  createTodo: ({ todo }) => {
    console.log(todo);
    return axiosInstance.post(path, { todo });
  },

  updateTodo: ({ id, data }) => {
    return axiosInstance.put(path + "/" + id, data);
  },
  deleteTodo: ({ id }) => {
    return axiosInstance.delete(path + "/" + id);
  },
};
