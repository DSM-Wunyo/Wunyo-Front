import axios from "axios";

export const Request = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "http://43.201.86.141:8080",
  });

  return request;
};
