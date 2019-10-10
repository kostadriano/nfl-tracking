import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

import App from './App.vue'
import VuexStore from './vuex/store';
import { routes } from './router-config';

Vue.use(ElementUI, { locale });
Vue.use(Vuex);
Vue.use(Router);
Vue.config.productionTip = false;

const store = new Vuex.Store(VuexStore);

const router = new Router({
  routes,
  mode: 'history',
});

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
