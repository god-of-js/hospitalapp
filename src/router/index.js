import Vue from "vue";
import VueRouter from "vue-router";
import auth from './authentication.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  ...auth,
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
