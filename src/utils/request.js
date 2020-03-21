import axios from 'axios'
import config from '../config'

const token = 'aaa'

axios.defaults.timeout = 5000
axios.defaults.baseURL = config.host

axios.interceptors.request.use(function (config) {
  config.headers.f = token
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  console.log(response)
  if (response.data) {
    return response.data
  }

  if (response.status === 200) {
    // 正常返回
    const data = response.data
    if (data.code === 200) {
      // 正常返回
      return data
    } else {
      // 目前还是正常返回，后续可能需要特殊处理
      return data
    }
  }
  if (response.status === 401 || response.status === 403) {
    // 没有登录等情况，测试用
  }
  return response.data
}, function (error) {
  console.error('===', error)
  return Promise.reject(error)
})

export default axios
