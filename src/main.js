// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the vue router
import VueRouter from 'vue-router'

//import the App component
import App from './App'
//tell Vue to use the router
Vue.use(VueRouter)

import Hello from './components/Hello'
import About from './components/About'
import Login from './components/Login'
import Admin from './components/Admin'
import Posts from './components/Posts'
import Comments from './components/Comments'

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  {
    path: '/admin', component: Admin,
    children: [
      {
        path: '/',
        component: Posts
      },
      {
        path: 'comments',
        component: Comments
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

//instatiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
