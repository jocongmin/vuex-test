import { GET_DATA_FOR_TESTBOX, GET_ARR_DATA } from '../mutation-types'

const state = {
    data: 1,
    testArr: []
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
}

export default {
    state,
    mutations
}