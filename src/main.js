import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css'; 



import store from "./store";
/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(iView)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
