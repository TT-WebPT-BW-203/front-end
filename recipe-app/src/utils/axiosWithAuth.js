import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: `https://family-recipes21.herokuapp.com/`,
    headers: {
      Authorization: token,
    },
  });
};
