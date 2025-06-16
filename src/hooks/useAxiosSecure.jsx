import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthProvider";

const instance = axios.create({
  // baseURL: "https://brain-wave-server.vercel.app/api/v1",
  baseURL: import.meta.env.DEV
    ? "http://localhost:3000/api/v1"
    : "https://brain-wave-server.vercel.app/api/v1",
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
