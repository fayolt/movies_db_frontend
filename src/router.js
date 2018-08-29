import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewMovie from '@/views/NewMovie.vue'
import Movie from '@/views/Movie.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/add',
      name: 'add',
      component: NewMovie
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movie
    }
  ]
})
