import Vue from 'vue'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL =  process.env.NODE_ENV === 'production' ? '/v1' : '/api/v1'
// axios.defaults.headers = {
//   'Content-Type': 'application/json'
// }
console.log(process.env.NODE_ENV)
// axios请求拦截器
axios.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token')
  if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = `Bearer ${token}`; // 请求头加上token
  }
  return config
}, error => {
  return Promise.reject(error)
});
axios.interceptors.response.use(response => {
  return response ? response.data : {}
}, error => {
  const response = error.response;
  if (response) {
    if (response.status === 401) {
      sessionStorage.removeItem('token');
      router.push('/login');
      window.$message.error(response.data ? response.data.msg : error.message || response.statusText)
    } else {
      console.log(response)
      window.$message.error('请求异常')
    }
    return response.data && response.data.msg ? response.data : {
      success: false,
      data: null,
      msg: error.message || response.statusText,
      status: response.status
    }
  } else {
    window.$message.error('网络异常，请重试！')
  }
  return {}
  // return Promise.resolve(error.response)
});
Vue.prototype.$axios = axios
