import axios from "axios";
import { TokenRepository } from "../repository/TokenRepository";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = TokenRepository.getToken();
  // 토큰값이 있다면
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // 로컬스토리지에 토큰이 있다면 요청의 헤더에 토큰을 심어서 보내라
  return config;
});
