import vueFreeFubble from './vue-free-bubble.vue'

const FreeFubble = {
  install: Vue => {
    Vue.component('vue-free-bubble', vueFreeFubble)
  }
}

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FreeFubble)
}

export default FreeFubble
