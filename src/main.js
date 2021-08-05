import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'

import marvin_mahaitao_test_test from 'marvin_mahaitao_test_test'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(marvin_mahaitao_test_test.sum2).use(marvin_mahaitao_test_test.sumFunction);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
