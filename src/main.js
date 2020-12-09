import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/main.scss'
import './assets/styles/flex.scss'
import dateFilter from "@/filters/date.filters"

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
