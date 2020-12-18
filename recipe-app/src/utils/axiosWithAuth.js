import axios from "axios";
const port = "";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  axios.create({
    baseURL: `http:localhost:${port}`,
    headers: {
      Authorization: JSON.parse(token),
    },
  });
};
