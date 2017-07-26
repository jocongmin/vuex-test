import { REQUEST_CONTENT_LIST,CHANGE_DATA_TWO } from '../mutation-types'

const state = {
    tagList:25,
    dataTwo:16
}

const mutations = {
    [REQUEST_CONTENT_LIST] (state,data) {
        console.log(data,'params in store')
        state.tagList = data
    },
    [CHANGE_DATA_TWO](state,data){
        state.dataTwo=data
    }
}

export default {
    state,
    mutations
}