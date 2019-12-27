/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:53:19
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-27 15:05:55
 */
import Vue from 'vue'
import App from './App.vue';

import Ruyi from './lib/index';
Vue.use(Ruyi);

new Vue({
  el: '#app',
  render: h => h(App)
})
