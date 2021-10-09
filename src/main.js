import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'

import xEleTable from 'photonpay'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.use(xEleTable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
