import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/requests/";

const token = localStorage.getItem("access");

export const getMyRequests = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};