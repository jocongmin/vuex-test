import { GET_DATA_FOR_TESTBOX } from '../mutation-types'

const state = {
    data: 1
}

const mutations = {
    [GET_DATA_FOR_TESTBOX](state, params) {
        var rd = Math.random() * 100;
        state.data = params * rd;
    }
}

export default {
    state,
    mutations
}