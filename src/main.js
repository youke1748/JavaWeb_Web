import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //ElementUI
import 'element-ui/lib/theme-chalk/index.css' //ElementUI CSS
import axios from 'axios'
import VueAxios from 'vue-axios'
//全局使用Axios
Vue.use(VueAxios, axios)
//全局使用ElementUI
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
