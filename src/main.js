import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import UpcomingsTask from './components/todo/tasks/UpcomingTasks.vue'


// Vue.use(VueRouter);
// const Routes = [
//   {path:'/', component: UpcomingsTask},
//   {path:'/calendar', component: UpcomingsTask},
// ]

// const Router = createRouter({
//   Routes
// })

const app = createApp(App)
// const app = Vue.createApp({})

// app.use(Router)


// new Vue({
//     router: Router,
// })

// 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {path:'/', component: UpcomingsTask},
    {path:'/calendar', component: UpcomingsTask},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!