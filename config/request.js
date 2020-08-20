import { API_PATH } from '@/config/utils.js'
export default async(url, params, method, type) => {
  return new Promise((resolve, reject) => {
	  uni.request({
		  url: url, //仅为示例，并非真实接口地址。
		  data: params,
		  withCredentials: true,
		  header: {
		    'content-type': 'application/json'
		  },
		  success: (res) => {
			 resolve(res.data)
		  },
		  fail: (error) => {
			 reject(error)
		  },
	  })
  })
}
