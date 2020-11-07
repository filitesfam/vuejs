import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueSimpleAlert from "vue-simple-alert";
import store from './store'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import vueRouter from 'vue-router'
import index from './routes/index.js'
import _ from 'lodash'
//  BootstrapVue
Vue.use(VueSimpleAlert);
Vue.use(BootstrapVue)
Vue.use(VueLodash, { lodash: lodash })
Vue.use(vueRouter)

//  BootstrapVue icon components plugin
Vue.use(IconsPlugin)
const router=new vueRouter({
  routes:index,
  mode: 'history'
})

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
  router:router
}).$mount('#app')
