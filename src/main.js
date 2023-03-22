import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/common.css'
import axios from 'axios'
import httpUrl from './assets/js/http'
Vue.config.productionTip = false

Vue.use(Vant);

// axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.prototype.httpUrl = httpUrl

new Vue({
  router,
  store,
  data() {
    return{}
  },
  render: h => h(App)
}).$mount('#app')
