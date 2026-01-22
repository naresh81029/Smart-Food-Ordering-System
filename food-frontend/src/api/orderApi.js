import axios from "axios";

const URL = "http://localhost:8081/api/orders";

export const bookFood = (foodId, username) =>
  axios.post(`${URL}/book/${foodId}?username=${username}`);

export const userOrders = (username) =>
  axios.get(`${URL}/user/${username}`);

export const cancelOrder = (id) =>
  axios.patch(`${URL}/cancel/${id}`);

export const allOrders = () =>
  axios.get(`${URL}/admin`);
