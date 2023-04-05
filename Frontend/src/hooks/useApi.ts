import axios, { AxiosRequestConfig } from "axios";

export interface apiProps {
  token?: string;
  path?: string;
  method: string;
  body?: {};
}

const baseUrl = import.meta.env.VITE_BASE_URL_API || "http://localhost:8080/api";

export const useApi = async ({ path, body, method, token }: apiProps) => {
  let finalUrl = `${baseUrl}/${path}`;
  let options: AxiosRequestConfig = {
    method: method,
    url: finalUrl,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`
    },
    data: body
  };
  try {
    const res = await axios(options);
    return {
      status: res.status,
      data: res.data
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
