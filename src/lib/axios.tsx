import axios from "axios";
import Cookies from "js-cookie";
import { IsTokenExpired, HandleExpiredToken } from "./jwt";

export const AxiosWithoutToken = axios.create({
  baseURL: 'https:/infisane.onrender.com/api/v1/',
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosWithToken = () => {
  const token = Cookies.get("jwtToken");

  if (token && IsTokenExpired(token)) {
    HandleExpiredToken();
    return AxiosWithoutToken; // Return an axios instance without token if expired
  }

  return axios.create({
    baseURL: 'https:/infisane.onrender.com/api/v1/',
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};

