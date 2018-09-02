import Vue from 'vue'
import Buefy from 'buefy'
import algoliasearch from 'algoliasearch'
import App from './App.vue'
import router from './router'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      get index() {
        return algoliasearch(process.env.VUE_APP_APP_KEY, process.env.VUE_APP_SEARCH_KEY).initIndex('movies_db_index');
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
