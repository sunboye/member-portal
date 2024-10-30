import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './service/http.js'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  created() {},
  render: h => h(App)
}).$mount('#app')
