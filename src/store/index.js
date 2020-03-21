import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    loginIn (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    loginOut (state) {
      state.token = ''
      localStorage.removeItem('token')
    }
  }
})

export default store
