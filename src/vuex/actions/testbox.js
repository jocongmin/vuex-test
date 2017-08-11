import * as types from '../mutation-types'


export function getDataforTestBox({
    commit
}, params) {
    console.log(params, 'params in action')
    commit(types.GET_DATA_FOR_TESTBOX, params)
}