import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'





Vue.config.productionTip = false

Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:1199/api/v1'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

