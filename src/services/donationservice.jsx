import api from "../api/api";

export const createDonation = (formData) => {
  return api.post(
    "/donations/",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

export const getDonation = () => {
  return api.get("/donations/");
};

export const getDonationById = (id) => {
  return api.get(`/donations/${id}/`);
};