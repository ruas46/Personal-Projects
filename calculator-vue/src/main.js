import Vue from 'vue'
import App from './App'

new Vue({
    render(createElement) {
        return createElement(App)
    }
    //Or can use like this:
    //render: h => h(App)
}).$mount('#app');