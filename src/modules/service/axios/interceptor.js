import Constant from '@/modules/constant'
const { Success, TokenExpired } = Constant.ResponseCode

export function requestSuccessFunc(requestObj) {
  return Promise.resolve(requestObj)
}

export function requestFailFunc(requestError) {
  return Promise.reject(requestError)
}

export function responseSuccessFunc(responseObj) {
  const data = responseObj.data

  try {
    switch (data.code) {
    case Success:
      // 业务成功
      return data
    case TokenExpired:
      // 登录过期
      break
    default:
      return data
    }
  } catch (error) {
    console.log('interceptor error: ', error)
    return {
      code: 0, // 保证业务端不需要try catch, 一定可以拿到对象并使用code判断
    }
  }
}

export function responseFailFunc(responseError) {
  return Promise.reject(responseError)
}
