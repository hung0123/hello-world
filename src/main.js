import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// VueAxios 與 axios 的位置不能交換，否則出現 TypeError: Cannot read property 'protocol' of undefined
Vue.use( VueAxios , axios)

/* 註冊所有組件為全域 */
Vue.use(BootstrapVue);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
