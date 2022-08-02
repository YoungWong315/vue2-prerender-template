import axios from 'axios'

import {
  requestSuccessFunc,
  requestFailFunc,
  responseSuccessFunc,
  responseFailFunc,
} from './interceptor'

function getEnvBaseUrl() {
  if (process.env.NODE_ENV == 'development') {
    return 'https://111'
  } else if (process.env.NODE_ENV == 'production') {
    return 'https://222'
  }
}
// 默认配置
const axiosInstance = axios.create({
  baseURL: getEnvBaseUrl(),
  timeout: 10000,
  maxContentLength: 2000,
  /*允许携带cookie*/
  withCredentials: false, // 表示跨域请求时是否需要使用凭证, 默认false
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': localStorage.getItem('token') || 'ec61b5ae-9d08-4c0b-a702-bb223a435a39'
  },
})

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入失败拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
