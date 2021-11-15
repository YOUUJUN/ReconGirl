import Vue from 'vue'
import App from './App'

import uView from 'uview-ui';
Vue.use(uView);

import store from './store/index';
import utils from './utils';

Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$fly = utils.fly;


Vue.prototype.$tools = utils.tools;

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount();
