import Vue from "vue";
import * as types from '../mutation-types'
import { GET_DATA_FROM_API, GET_DATA_FROM_DATA_TWO } from "../request-types"
import { reqState, reqMutations } from "../modules/request.js";

export function getDataforTestBox({
    commit
}, params) {
    commit(types.SET_DATA_FOR_TESTBOX, params)
}

export function getArrData({
    commit
}, params) {
    commit(types.SET_ARR_DATA, params)
}
export function getDataFromApi({
    commit
}, params) {
    if (reqState.GET_DATA_FROM_API) {
        return;
    }
    reqMutations.SET_REQ_STATE(reqState, { name: GET_DATA_FROM_API, reqIs: false })
    Vue.axios.get("http://localhost:8083/data.json").then((response) => {
        var apiData = response.data.result;
        commit(types.SET_DATA_FROM_API, apiData); //http 请求需要放在action里面，然后只有commit后才会下一步的module处理
        reqMutations.SET_REQ_STATE(reqState, { name: GET_DATA_FROM_API, reqIs: true })
    })
}
export function getDataTwo({
    commit
}, params) {
    if (reqState.GET_DATA_FROM_DATA_TWO) {
        return;
    }
    reqMutations.SET_REQ_STATE(reqState, { name: GET_DATA_FROM_DATA_TWO, reqIs: false })
    Vue.axios.get("http://localhost:8083/data2.json").then((response) => {
        var apiData = response.data.result;
        commit(types.SET_DATA_FROM_DATA_TWO, apiData); //http 请求需要放在action里面，然后只有commit后才会下一步的module处理
        reqMutations.SET_REQ_STATE(reqState, { name: GET_DATA_FROM_DATA_TWO, reqIs: true })
    })
}