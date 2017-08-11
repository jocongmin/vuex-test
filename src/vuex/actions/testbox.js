import * as types from '../mutation-types'


export function getDataforTestBox({
    commit
}, params) {
    commit(types.GET_DATA_FOR_TESTBOX, params)
}

export function getArrData({
    commit
}, params) {
    commit(types.GET_ARR_DATA, params)
}