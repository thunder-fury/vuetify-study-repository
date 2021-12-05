// /* eslint-disable no-unused-vars */
// const state = () => ({
//   user: {
//     name: 'thunder_fury'
//   },
//   count: 0,
//   loading: false,
//   disabled: false,
//   testData: '',
//   id: '',
//   token: '',
//   posts: []

// })

// // ステートエクスポート
// const getters = {
//   user: (state) => {
//     return state.user
//   }
// }

// const mutations = {
//   increment (state) {
//     state.count++
//   },
//   decrement (state) {
//     state.count--
//   },
//   getPosts (state, payload) {
//     state.posts = payload
//   },
//   setData (state, payload) {
//     state.testData = payload
//   },
//   setLoading (state, payload) {
//     state.loading = payload
//   },
//   setDisabled (state, payload) {
//     state.disabled = payload
//   },
//   resetCount (state, payload) {
//     state.count = payload
//   }
// }

// const actions = {
//   async getData ({ commit, state }) {
//     commit('setLoading', true)
//     // サンプルPOSTデータ
//     await new Promise(resolve => setTimeout(() => {
//       return resolve()
//     }, 1000))
//     const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
//     commit('getPosts', posts)
//     commit('setLoading', false)
//     return posts
//   },
//   pageLoding ({ commit, state }, payload) {
//     commit('setLoading', true)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         commit('setLoading', false)
//         resolve()
//       }, 2000)
//     })
//   },
//   addData ({ commit, state }, payload) {
//     commit('setLoading', true)
//     commit('setDisabled', true)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         commit('increment')
//         commit('setLoading', false)
//         commit('setDisabled', false)
//         resolve()
//       }, 2000)
//     })
//   },
//   addAsync ({ commit, state }, payload) {
//     commit('setLoading', true)
//     commit('setDisabled', true)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         commit('increment')
//         commit('setLoading', false)
//         commit('setDisabled', false)
//         resolve()
//       }, 2000)
//     })
//   },
//   removeAsync ({ commit, state }, payload) {
//     commit('setLoading', true)
//     commit('setDisabled', true)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         commit('decrement')
//         commit('setLoading', false)
//         commit('setDisabled', false)
//         if (state.count <= 0) {
//           commit('resetCount', 0)
//         }
//         resolve()
//       }, 2000)
//     })
//   }
// }

// export default {
//   state,
//   getters,
//   mutations,
//   actions
// }

import common from './module/common'
import api from './module/api'
export const modules = {
  common,
  api
}
