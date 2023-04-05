import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface apiProps {
  token?: string;
  path?: string;
  method: string;
  body?: {};
}

const baseUrl = import.meta.env.VITE_BASE_URL_API || "http://localhost:8080/api";

export const useApi = async <T>({
  path,
  body,
  method,
  token
}: apiProps): Promise<AxiosResponse<T>> => {
  const finalUrl = `${baseUrl}/${path}`;
  const options: AxiosRequestConfig = {
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
    const response = await axios(options);
    return response;
  } catch (error) {
    throw error as AxiosError;
  }
};
