// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueTap from 'v-tap';

Vue.config.productionTip = false;
Vue.use(vueTap);
Vue.use(VueAxios, axios)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})