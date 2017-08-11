import Vue from "vue";
import { GET_DATA_FOR_TESTBOX, GET_ARR_DATA, GET_DATA_FROM_API } from '../mutation-types'

const state = {
    data: 1,
    testArr: [],
    apiData: {},
    apiData2: {}
}

const mutations = {
    [GET_DATA_FOR_TESTBOX](state, params) {
        var rd = Math.random() * 100;
        state.data = params * rd;
    },
    [GET_ARR_DATA](state, params) {
        var arr = []
        for (var i = 0; i < 100; i++) {
            arr.push(i)
        }
        state.testArr = arr;
    },
    [GET_DATA_FROM_API](state, params) {
        state.apiData = params;
    },
    [GET_DATA_FROM_API](state, params) {
        state.apiData2 = params;
    },
}

export default {
    state,
    mutations
}