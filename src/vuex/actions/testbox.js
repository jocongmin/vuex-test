import Vue from "vue";
import * as types from '../mutation-types'
import { GET_DATA_FROM_API, GET_DATA_FROM_DATA_TWO } from "../request-types"
import setRequestType from "../modules/request.js";

const reqMutations = setRequestType.mutations;
const reqState = setRequestType.state;

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
export function getDataFromApi({
    commit
}, params) {
    if (reqState.GET_DATA_FROM_API) {
        return;
    }
    reqMutations.SET_REQ_STATE(setRequestType.state, { name: GET_DATA_FROM_API, reqIs: false })
    Vue.axios.get("http://localhost:8083/data.json").then((response) => {
        console.log('req data===========')
        var apiData = response.data.result;
        commit(types.GET_DATA_FROM_API, apiData); //http 请求需要放在action里面，然后只有commit后才会下一步的module处理
        setRequestType.mutations.SET_REQ_STATE(setRequestType.state, { name: GET_DATA_FROM_API, reqIs: true })
    })
}
export function getDataTwo({
    commit
}, params) {
    if (reqState.GET_DATA_FROM_DATA_TWO) {
        return;
    }
    reqMutations.SET_REQ_STATE(setRequestType.state, { name: GET_DATA_FROM_DATA_TWO, reqIs: false })
    Vue.axios.get("http://localhost:8083/data2.json").then((response) => {
        console.log('req data===========')
        var apiData = response.data.result;
        commit(types.GET_DATA_FROM_API, apiData); //http 请求需要放在action里面，然后只有commit后才会下一步的module处理
        setRequestType.mutations.SET_REQ_STATE(setRequestType.state, { name: GET_DATA_FROM_DATA_TWO, reqIs: true })
    })
}