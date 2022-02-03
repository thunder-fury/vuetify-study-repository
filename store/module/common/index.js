const state = () => ({
  loading: false,
  currentPage: 1,
  pabeNationConfig: {
    datas: '',
    currentPage: '',
    perPage: '',
    upperPage: ''
  }
})

const mutations = {
  setLoading (state, payload) {
    state.loading = payload
  },
  setCurrentPage (state, payload) {
    state.currentPage = payload
  }
}
const getters = {
  loading: state => state.loading,
  pabeNationConfig: state => state.pabeNationConfig,
  currentPage: state => state.currentPage
}

const actions = {
  pageNationConfig: ({ commit, state }, payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  paginate ({ commit, state }, payload) {
    commit('setCurrentPage', payload)
  },
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
