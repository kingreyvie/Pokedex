import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import RepoList from '@/components/RepoList'
import RepoDetails from '@/components/RepoDetails'
import RoyalRumble from '@/components/RoyalRumble'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/repos/:username',
      name: 'RepoList',
      component: RepoList
    },
    {
      path: '/repo/:username/:repo',
      name: 'RepoDetails',
      component: RepoDetails
    },
    {
      path: '/royal/rumble',
      name: 'RoyalRumble',
      component: RoyalRumble
    }
  ]
})
