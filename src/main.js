import Vue from 'vue'
import App from './App'
import EC2 from './components/EC2'
import S3 from './components/S3'
import RDS from './components/RDS'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: '/EC2', component: EC2},
    {path: '/S3', component: S3},
    {path: '/RDS', component: RDS}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
