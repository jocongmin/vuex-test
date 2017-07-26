import * as types from './mutation-types'


export default {
  // 获取文章列表
  getContentList ({ commit }) {
    commit(types.REQUEST_CONTENT_LIST)
  }

}
