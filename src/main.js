import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import qs from 'qs';
import moment from 'moment';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueAxios, axios);
Vue.prototype.qs = qs;
Vue.use(ViewUI);

Vue.config.productionTip = false;

Vue.filter('dateFormat', function (tick) {
  return moment(tick).format("YYYY-MM-DD HH:mm:ss");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
