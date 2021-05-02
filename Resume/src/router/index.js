
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import AddProject from '@/views/AddProject'
import EditProject from '@/views/EditProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddProject',
      component: AddProject
    },
    {
      path: '/Resume/:id',
      name: 'EditProject',
      component: EditProject,
      props: true
    }

  ]

})
