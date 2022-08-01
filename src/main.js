import Vue from 'vue'
import router from '@/modules/router'
import App from './App.vue'


const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'))
    }, 5000)
  }
})

app.$mount('#app')

