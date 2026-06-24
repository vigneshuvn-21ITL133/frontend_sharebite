import api from "../api/api";

export const createRequest = (data) => {
  return api.post("/requests/", data);
};

export const getMyRequests = () => {
  return api.get("/requests/");
};


export const getIncomingRequests = () => {
  return api.get("/requests/incoming/");
};