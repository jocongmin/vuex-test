import { SET_REQ_STATE } from "../mutation-types.js";
const state = {

}

const mutations = {
    [SET_REQ_STATE](state, params) {
        state[params.name] = params.reqIs;
    }
}

export default {
    state,
    mutations
}