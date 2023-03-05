// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import NestedComponent from '../views/NestedComponent.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about:name',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/databinding',
//     name: 'DataBinding',
//     component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/DataBinding.vue')
//   },
//   {
//     path: '/databindinghtml',
//     name: 'DataBindingHtml',
//     component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
//   },
//   {
//     path: '/databindinginputtext',
//     name: 'DataBindingInputText',
//     component: () => import(/* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputText.vue')
//   },
//   {
//     path: '/databindinginputnumber',
//     name: 'DataBindingInputNumber',
//     component: () => import(/* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputNumber.vue')
//   },
//   {
//     path: '/watchdata',
//     name: 'WatchData',
//     component: () => import(/* webpackChunkName: "watch" */ '../views/WatchData.vue')
//   },
//   {
//     path: '/watchexample',
//     name: 'WatchExample',
//     component: () => import(/* webpackChunkName: "watchexample" */ '../views/composition/WatchExample.vue')
//   },
//   {
//     path: '/nested',
//     name: 'NestedComponent',
//     component: NestedComponent
//   },
//   {
//     path: '/compsition/parent',
//     name: 'ParentComponentC',
//     component: () => import(/* webpackChunkName: "parent" */ '../views/composition/ParentComponentC.vue')
//   },
//   {
//     path: '/databindinglist',
//     name: 'DataBindingList',
//     component: () => import(/* webpackChunkName: "databindinglist" */ '../views/DataBindingList.vue')
//   },
//   {
//     path: '/firstcomponent', //firstcomponent
//     name: 'FirstComponent',
//     component: () => import(/* webpackChunkName: "firstcomponent" */ '../views/provideinjection/FirstComponent.vue')
//   },
//   {
//     path: '/props/parentcomponentview', //firstcomponent
//     name: 'ParentComponentView',
//     component: () => import(/* webpackChunkName: "parentcomponentview" */ '../views/props/ParentComponentView.vue')
//   },
//   {
//     path: '/computedvsmethodview', //firstcomponent
//     name: 'ParentComponentView',
//     component: () => import(/* webpackChunkName: "computedvsmethodview" */ '../views/ComputedVSMethodView.vue')
//   },
//   {
//     path: '/computedvswatch',
//     name: 'ComputedVSWatch',
//     component: () => import(/* webpackChunkName: "computedvswatch" */ '../views/ComputedVSWatch.vue')
//   },
//   {
//     path: '/axiosget',
//     name: 'AxiosGet',
//     component: () => import(/* webpackChunkName: "axiosbasicview" */ '../views/axios/AxiosBasicGetView.vue')
//   },
//   {
//     path: '/axiospost',
//     name: 'AxiosPost',
//     component: () => import(/* webpackChunkName: "axiosbasicview" */ '../views/axios/AxiosBasicPostView.vue')
//   },
//   {
//     path: '/axiospost2',
//     name: 'AxiosPost2',
//     component: () => import(/* webpackChunkName: "axiosbasicview" */ '../views/axios/AxiosBasicPostView2.vue')
//   },
//   {
//     path: '/axiosglobal',
//     name: 'AxiosGlobal',
//     component: () => import(/* webpackChunkName: "axiosglobalview" */ '../views/axios/AxiosGlobalGetView.vue')
//   },
//   {
//     path: '/axiossync',
//     name: 'AxiosSync',
//     component: () => import(/* webpackChunkName: "axiossyncview" */ '../views/axios/AxiosSyncView.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

//https://ryu-e.tistory.com/53

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/about/:name', name: 'About2', component: About },
  {
    path: '/about3',
    name: 'About3',
    component: () =>
      import(/* webpackChunkName: "about3" */ '../views/About.vue')
  },
  {
    path: '/about4',
    name: 'About4',
    component: () =>
      import(/* webpackChunkName: "about3" */ '../views/About.vue')
  },
  {
    path: '/about5',
    name: 'About5',
    component: () =>
      import(/* webpackChunkName: "about3" */ '../views/About.vue')
  },
  {
    path: '/life',
    name: 'LifeCycle',
    component: () =>
      import(/* webpackChunkName: "about3" */ '../views/LifeCycleView.vue')
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: () =>
      import(/* webpackChunkName: "about3" */ '../views/MixinView.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () =>
      import(/* webpackChunkName: "vuex" */ '../views/vuex/UsersView.vue')
  }
  // { path: '/names', name: 'Names', component: Names },
  // { path: '/user/:name', name: 'User', component: User },
  // { path: '/user2/:name', name: 'User2', component: User2, props: true },
  // { path: '/:catchAll(.*)', name: 'ErrorPage', component: ErrorPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
