import axios from "axios";

const URL = "http://localhost:8081/api/food";

export const getAllFood = () =>
  axios.get(URL);

export const addFood = (food) =>
  axios.post(`${URL}/add`, food);

export const updateFood = (id, food) =>
  axios.put(`${URL}/update/${id}`, food);

export const deleteFood = (id) =>
  axios.delete(`${URL}/delete/${id}`);
