import uniRequest from '@/config/request.js'
import {API_PATH} from '@/config/utils.js'

// 推荐的话题
export const hotTopic = (obj) => uniRequest(API_PATH + '/hot/topic', obj, 'GET')


// banner
export const banner = (obj) => uniRequest(API_PATH + '/banner', obj, 'GET')
