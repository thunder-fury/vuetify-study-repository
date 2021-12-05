const state = () => ({
  loading: false
})

const mutations = {
  setLoading (state, payload) {
    state.loading = payload
  }
}
const getters = {
  loading: state => state.loading
}

const actions = {
  pageLoding ({ commit, state }, payload) {
    commit('setLoading', true)
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('setLoading', false)
        resolve()
      }, 2000)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
