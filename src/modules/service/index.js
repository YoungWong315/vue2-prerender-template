import axios from '@/modules/service/axios'
function updateToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// 返回code
import * as ResponseCode from '@/modules/constant/responseCode'

// 接口
import * as Weather from './services/weather'

export default {
  updateToken,
  ResponseCode,
  Weather,
}