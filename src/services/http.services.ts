import axios, { AxiosResponse } from "axios";
import {
  AxiosInstance,
  AxiosRequestConfig,
} from "./../../node_modules/axios/index.d";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
};
const instance: AxiosInstance = axios.create(axiosConfig);

// instance.get("/products").then(res=>res.data)

class Request {
  async get(url: string): Promise<AxiosResponse> {
    return instance.get(url).then((res) => res.data);
  }
  //   async post(url: string, body): Promise<AxiosResponse> {
  //     return instance.post(url, body);
  //   }
  //   async update(url: string, body): Promise<AxiosResponse> {
  //     return instance.patch(url, body);
  //   }
  async delete(url: string): Promise<AxiosResponse> {
    return instance.delete(url);
  }
}
const httpRequest = new Request();
export default httpRequest;
