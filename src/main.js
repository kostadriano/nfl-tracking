import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import VuexStore from './vuex/store';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
