import axios, {AxiosResponse, AxiosRequestConfig } from 'axios'
import { codeMessage, RequestOptions } from './requestInterface'
import successHandler from './successHandler';
import { requestError } from './errorHandler';

// 添加请求拦截器
axios.interceptors.request.use(
  config =>
    config,
  error => Promise.reject(error)
);

export default function request<T>(options: RequestOptions): Promise<T> {
  const {url: requestUrl = '', data} = options
  const newOptions: any = {
    credentials: 'include',
    method: '',
    ...options,
  }

  if(['POST','PUT'].includes(newOptions.method)) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(data)
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
        ...newOptions.headers,
      }
    }
  }

  return axios(requestUrl, newOptions)
         .then((response: any) => response.data)
         .then((source: RequestOptions) => successHandler(source, newOptions))
         .catch((error: any) => requestError(error, newOptions))
}