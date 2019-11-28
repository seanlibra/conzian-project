import Vue from 'vue'
import Router from 'vue-router'
import page from '@/router/page.js'
import main from '@/router/main.js'
Vue.use(Router)

export default new Router({
  routes: [
    ...main,
    ...page
  ]
})
