import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import RockApi from './plugins/rockApi';
import VueCookie from 'vue-cookie';
import router from './plugins/router';
import Formatter from './plugins/formatter';

import './css/index.scss'

Vue.use(VueCookie)
Vue.use(RockApi)
Vue.use(Formatter)


Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
