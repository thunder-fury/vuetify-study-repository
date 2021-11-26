const state = () => ({
  user: {
    name: 'thunder_fury'
  },
  loading: false,
  count: 0
})

// ステートエクスポート
const getters = {
  user: (state) => {
    return state.user
  }
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },

  setLoading (state, payload) {
    state.loading = payload
  }
}

const actions = {
  addAsync ({ commit, state }, payload) {
    commit('setLoading', true)
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
        commit('setLoading', false)
        resolve()
      }, 2000)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
