import { createStandaloneToast } from "@chakra-ui/react";
import axios, { AxiosInstance } from "axios";

const setInterceptor = (instance: AxiosInstance) => {
  const { toast } = createStandaloneToast();
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      toast({
        title: error.response.data.message,
        status: "error",
      });
      return Promise.reject(error);
    }
  );

  return instance;
};

const options = {
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
};

export const publicApi = setInterceptor(
  axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_API_URL,
    ...options,
  })
);

export const setToken = async (token: string | undefined) => {
  window.localStorage.setItem("access_token", String(token));
  publicApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
