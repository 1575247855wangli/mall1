import axios from 'axios'
import router from '@/router/index'
axios.defaults.withCredentials = true
export const http = axios.create({
  // baseURL: 'http://admintest.happymmall.com'
})
// 192.168.31.252:8080
// 请求拦截，所有的请求都先执行这段



const httpPlugin = {}

httpPlugin.install = function (Vue, options) {
  Vue.prototype.$http = http
}
export default httpPlugin