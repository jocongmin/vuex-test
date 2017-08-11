import Vue from "vue";
import { SET_DATA_FOR_TESTBOX, SET_ARR_DATA, SET_DATA_FROM_API, SET_DATA_FROM_DATA_TWO } from '../mutation-types'

const state = {
    data: 1,
    testArr: [],
    apiData: {},
    apiData2: {}
}

const mutations = {
    [SET_DATA_FOR_TESTBOX](state, params) {
        var rd = Math.random() * 100;
        state.data = params * rd;
    },
    [SET_ARR_DATA](state, params) {
        var arr = []
        for (var i = 0; i < 100; i++) {
            arr.push(i)
        }
        state.testArr = arr;
    },
    [SET_DATA_FROM_API](state, params) {
        state.apiData = params;
    },
    [SET_DATA_FROM_DATA_TWO](state, params) {
        state.apiData2 = params;
    },
}

export default {
    state,
    mutations
}