import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/pages/page1'
import page2 from '@/components/pages/page2'
import Tab from '@/components/pages/tabBar'
import sidebar from '@/components/sidebar'


const Foo = {
  template: '<div>Foo component!</div>'
};

const Bar = {
  template: '<div>Bar component!</div>'
};

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/:id',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/tabBar',
      name:'tab',
      component: Tab,
      children: [
        {
          path: 'page1',
          name:'Page1',
          component: page1,
        },
          
        {
          path: 'page2',
          name:'Page2',
          component: page2,
        },
      ]
    },
    {
      path: '/sidebar',
      component: sidebar,
    },
   
  ]
})
