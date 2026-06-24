import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

export const loginUser = (data) => {
  return axios.post(
    `${API_URL}/login/`,
    data
  );
};

export const registerUser = (data) => {
  return axios.post(
    `${API_URL}/register/`,
    data
  );
};

export const getProfile = () => {

  const token =
    localStorage.getItem(
      "access_token"
    );

  return axios.get(
    `${API_URL}/profile/`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};