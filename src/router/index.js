import Vue from 'vue'
import Router from 'vue-router'
import board from '@/pages/board'
import summary from '@/components/summary'
import profile from '@/components/profile'
import tab from '@/components/tab'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'board',
      component: board,
    },
    {
      path: '/user/:id',
      name:'tab',
      component: tab,
      children: [
        {
          path: 'summary',
          name:'summary',
          component: summary,
        },
        {
          path: 'profile',
          name:'profile',
          component: profile,
        },
      ]
    },
  ]
})
