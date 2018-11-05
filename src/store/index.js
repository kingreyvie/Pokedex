import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: {
      sprite: 'https://fontmeme.com/images/Pokemon-Logo.jpg'
    },
    showLoader: false
  },
  actions,
  mutations
})