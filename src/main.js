import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';
import 'common/stylus/index.styl';
import $ from 'jquery';
import './assets/css/animate.css'; 
//import './assets/css/bootstrap.min.css';  
//import './assets/js/bootstrap.min'; 



Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
