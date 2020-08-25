import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'

// 安装
// import iView from 'view-design'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
