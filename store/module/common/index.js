const state = () => ({
  loading: false,
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
  }
}
const getters = {
  loading: state => state.loading,
  pabeNationConfig: state => state.pabeNationConfig
}

const actions = {
  pageNationConfig: ({ commit, state }, payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
    // const { datas, currentPage, perPage, upperPage } = payload
    // const totalPage = Math.ceil(datas?.length / perPage)
    // let startPage = currentPage - Math.round((upperPage - 1) / 2)
    // let endPage = currentPage + Math.floor((upperPage - 1) / 2)
    // if (startPage < 1) { endPage += 1 - startPage }
    // startPage = Math.max(startPage, 1)
    // if (endPage > totalPage) { startPage -= endPage - totalPage }
    // endPage = Math.min(totalPage, endPage)
    // const indexOfLastPost = payload.currentPage * payload.perPage
    // const indexOfFirstPost = indexOfLastPost - payload.perPage
    // const currentPosts = payload.datas && payload.datas.slice(indexOfFirstPost, indexOfLastPost)
    // return {
    //   totalPage,
    //   startPage,
    //   endPage,
    //   currentPage,
    //   currentPosts,
    //   upperPage
    // }
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
