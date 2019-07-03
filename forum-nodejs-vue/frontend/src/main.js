import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporary Valid Token to develop Front-End
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IlRlc3RVc2VyIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1NjIxNzQ1NjgsImV4cCI6MTU2MjQzMzc2OH0.uwcWGxm24R-w5qU08Xq_LhhCfkl5p-ICDTr90WDhcps'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')