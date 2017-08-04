import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: (resolve)=>{
        require(['@/components/Test'],resolve);
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: (resolve)=>{
        require(['@/components/Hello'],resolve);
      }
    },
    {
      path: '/thing',
      name: 'thing',
      component: (resolve)=>{
        require(['@/components/Thing'],resolve);
      }
    }
  ]
})
