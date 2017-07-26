import * as types from './mutation-types'


export default {
  // 获取文章列表
  getContentList ({ commit },params) {
    console.log(params,'params in action')
    commit(types.REQUEST_CONTENT_LIST,params)
  },
  changeDataTwo({ commit },params){
    commit(types.CHANGE_DATA_TWO,params)
  }

}
