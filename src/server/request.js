import axios from 'axios'
// import store from '@/store'
// import storageService from '../service/storageService'
// import Vue from 'vue'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 1000 * 60 * 2, // request timeout
//   headers:{Authorization:`Bearer ${storageService.get(storageService.USER_TOKEN)}`}
})

//请求拦截器
// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // Object.assign(config.headers,{Authorization:`Bearer ${storageService.get(storageService.USER_TOKEN)}`})
    // if (store.getters.accessToken) {
    //   config.headers.Authorization = `Bearer ${store.getters.accessToken}`
    // }
    // config.headers.Accept = 'application/json,Date, text/plain, */*'
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

//返回拦截器
// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status === 200) {
      return response.data
    }
    if (res.status === undefined) {
      return response.data
    }
    return Promise.reject(res.msg)
  },
  error => {
    //错误提示
    // if (error.response && error.response.status === 401) {
    //   store.dispatch('authorize')
    //   return
    // }
    // let errorMsg = ''
    // if (error.response && error.response.data && error.response.data.error) {
    //   if (error.response.data.error_description) {
    //     errorMsg = error.response.data.error_description
    //   } else {
    //     errorMsg = error.response.data.error
    //   }
    // } else {
    //   errorMsg = error.message
    // }

    return Promise.reject(error)
  }
)

export default service