// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueFire from "vuefire";

import App from "./App";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFire);

import Hello from "./components/Hello";
import About from "./components/About";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const routes = [
  { path: "/", component: Hello },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "/",
        component: Posts
      },
      {
        path: "comments",
        component: Comments
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  router
}).$mount("#app"); //mount the router on the app
