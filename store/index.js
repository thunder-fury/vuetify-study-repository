const state = () => ({
  user: {
    name: 'thunder_fury'
  },
  count: 0,
  loading: false,
  disabled: false
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
  },
  setDisabled (state, payload) {
    state.disabled = payload
  },
  resetCount (state, payload) {
    state.count = payload
  }
}

const actions = {
  addAsync ({ commit, state }, payload) {
    commit('setLoading', true)
    commit('setDisabled', true)
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
        commit('setLoading', false)
        commit('setDisabled', false)
        resolve()
      }, 2000)
    })
  },
  removeAsync ({ commit, state }, payload) {
    commit('setLoading', true)
    commit('setDisabled', true)
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('decrement')
        commit('setLoading', false)
        commit('setDisabled', false)
        if (state.count <= 0) {
          commit('resetCount', 0)
        }
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
