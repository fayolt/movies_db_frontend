import Vue from 'vue'
import Buefy from 'buefy'
import algoliasearch from 'algoliasearch'
import App from './App.vue'
import router from './router'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      get index() {
        return algoliasearch('F1H4RHQQOS', '0d329e74f614d29ee2c8b1e4c9d03fb5').initIndex('movies_db_index');
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
