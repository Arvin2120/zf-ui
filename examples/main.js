import Vue from 'vue'
import App from './App.vue'
import "./assets/icon.scss"
import AxButton from "./components/button.vue"
Vue.component(AxButton.name, AxButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
