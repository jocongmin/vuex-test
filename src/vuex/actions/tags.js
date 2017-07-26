import * as types from '../mutation-types'


export function getContentList({
  commit
}, params) {
  console.log(params, 'params in action')
  commit(types.REQUEST_CONTENT_LIST, params)
}
export function changeDataTwo({
  commit
}, params) {
  commit(types.CHANGE_DATA_TWO, params)
}
