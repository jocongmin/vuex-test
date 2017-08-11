import * as types from '../mutation-types'
import Vue from "vue";

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
    Vue.axios.get("http://localhost:8083/data.json").then((response) => {
        console.log(response.data);
        var apiData = response.data.result;
        commit(types.GET_DATA_FROM_API, apiData); //http 请求需要放在action里面，然后只有commit后才会下一步的module处理
    })
}