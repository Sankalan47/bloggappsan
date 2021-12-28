import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bloggappsan.herokuapp.com/api",
});
