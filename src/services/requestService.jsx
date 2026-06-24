import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/requests/";

export const createRequest = (data) => {
  const token = localStorage.getItem("access_token");

  return axios.post(
    API_URL,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMyRequests = () => {
  const token = localStorage.getItem("access_token");

  return axios.get(
    API_URL,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};