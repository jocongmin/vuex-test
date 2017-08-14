import * as types from '../mutation-types'


export function setReqState({
    commit
}, params) {
    commit(types.SET_REQ_STATE, params)
}