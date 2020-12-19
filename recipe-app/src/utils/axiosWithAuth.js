import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  axios.create({
    baseURL: `https://family-recipes21.herokuapp.com/`,
    headers: {
      Authorization: JSON.parse(token),
    },
  });
};
