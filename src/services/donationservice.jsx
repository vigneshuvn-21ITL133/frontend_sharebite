import api from "../api/api"

export const getDonations = () => {
  return api.get("/donations/donations");
};

export const getDonation = (id) => {
  return api.get(`/donations/donations/${id}/`);
};

export const createDonation = (data) => {
  return api.post("/donations/", data);
};