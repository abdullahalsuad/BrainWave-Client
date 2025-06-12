import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthProvider";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);

  if (user?.accessToken) {
    instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
  }

  return instance;
};

export default useAxiosSecure;
