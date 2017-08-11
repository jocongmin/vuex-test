import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/index'
console.log(actions, 'actions=============')

// modules 模块分类
import tags from './modules/tags'
import testbox from "./modules/testbox"

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    actions,
    modules: {
        tags,
        testbox
    }
})