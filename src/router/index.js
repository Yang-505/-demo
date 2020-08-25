import Vue from 'vue'
import VueRouter from 'vue-router'

const Parent = () => import('@/views/parent')

const Test = () => import('@/views/test')
const Children = () => import('@/views/children')
const Eventbus = () => import('@/views/EventBus')
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/parent'
    }
    , {
      path: "/parent",
      component: Parent,
      children: [
        {
          path: '/children',
          component: Children
        },
      ]
    },
    {
      path: '/eventbus',
      component: Eventbus
    },
    // 测试代码
    {
      path: '/test',
      component: Test
    }
  ]
})

export default router 
