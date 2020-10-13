import request from '@utils/request'
import * as constants from '@utils/constants'

const url = constants.BASE_URL

export async function queryRecommend(params) {
  return request.get(`${url}/xhr/rcmd/index.json`, params);
}

