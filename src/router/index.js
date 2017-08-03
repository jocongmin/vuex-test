import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Hello from '@/components/Hello'
import Thing from "@/components/Thing"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: (resolve)=>{
        require(['@/components/Test'],resolve);
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: (resolve)=>{
        require(['@/components/Hello'],resolve);
      }
    },
    {
      path: '/thing',
      name: 'Thing',
      component: (resolve)=>{
        require(['@/components/Thing'],resolve);
      }
    }
  ]
})
