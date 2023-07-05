import axios from "axios";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "https://hackton.jungho.tk",
  });

  return request;
};
