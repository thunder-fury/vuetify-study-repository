const state = () => ({
  apiData: []
})

const getters = {
  apiData: state => state.apiData
}
// 同期処理
const mutations = {
  setData (state, payload) {
    state.apiData = payload
  }
}
// 非同期処理
const actions = {
  async getData ({ commit, state }, payload) {
    // commit('setLoading', true)
    // サンプルPOSTデータ
    // const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    const posts = await fetch(payload.url).then(res => res.json())
    commit('setData', posts)
    // commit('setLoading', false)
    return posts
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}
