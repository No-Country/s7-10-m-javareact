import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface apiProps {
  token?: string;
  path?: string;
  method: string;
  body?: {};
}

const baseUrl =
  import.meta.env.VITE_BASE_URL_API || "https://nocountry-s7-10m-production.up.railway.app/api";

export const useApi = async <T>({
  path,
  body,
  method,
  token
}: apiProps): Promise<AxiosResponse<T>> => {
  console.log(body);
  const finalUrl = `${baseUrl}/${path}`;
  const options: AxiosRequestConfig = {
    method: method,
    url: finalUrl,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
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
