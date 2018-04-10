import Vue from 'vue'
import App from './App.vue'
import vueFreeBubble from './lib/index'

Vue.use(vueFreeBubble)

new Vue({
  el: '#app',
  render: h => h(App)
})
