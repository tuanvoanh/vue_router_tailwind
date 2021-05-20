import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
const routes = [
  {
      path: "/about/:slug",
      name: "About",
      component: About
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router