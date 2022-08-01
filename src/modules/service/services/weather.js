import axios from '@/modules/service/axios'

/* 获取token */
export const getWeather = () => axios.post('http://192.168.51.24/cnki-gw/inspect/dailyExam/getList', {
  pageDto: { page: 1, rows: 50 }
})