import axios from '@/modules/service/axios'
export function updateToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// 返回code
import * as ResponseCode from '@/modules/constant/responseCode'

// 接口
import * as List from './services/list'

export default {
  ResponseCode,
  List,
}