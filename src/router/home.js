
import Home from "../views/home/Home.vue";
import about from "../views/home/about.vue";
import homelayout from '../layouts/homelayout.vue'
export default[{
   path: '/homelayout',
   component: homelayout,
   children: [
    {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        component: about
   ]
}]