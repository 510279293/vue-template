import axios from 'axios'
import successHandler from './successHandler';
import { requestError } from './errorHandler';
import {message} from 'ant-design-vue';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api base_url
  timeout: 6000 // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// 添加响应拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error.response)
    const {data} = error.response
    message.error(`接口响应错误: ${JSON.stringify(data)}`)
    return Promise.reject(error)
  }
);

export default function request(options) {
  const {url: requestUrl = '', data} = options
  const newOptions = {
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

  return service(requestUrl, newOptions)
         .then(response => response.data)
         .then(source => successHandler(source, newOptions))
         .catch(error => requestError(error, newOptions))
}
