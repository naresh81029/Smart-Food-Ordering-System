import axios from "axios";

const BASE_URL = "http://localhost:8081/api/auth";

export const login = (data) =>
  axios.post(`${BASE_URL}/login`, data);

export const registerUser = (data) =>
  axios.post(`${BASE_URL}/register/user`, data);

export const registerAdmin = (data) =>
  axios.post(`${BASE_URL}/register/admin`, data);

export const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("role");
};

