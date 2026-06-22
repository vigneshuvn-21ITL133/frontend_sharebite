import axios from "axios";

const API_URL = "http://localhost:8000/api/token/";

export const loginUser = (data) => {
  return axios.post(API_URL, data);
};