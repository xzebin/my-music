import Vue from 'vue'
import App from './App'
import request from './api/request.js'
Vue.prototype.$request = request
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
