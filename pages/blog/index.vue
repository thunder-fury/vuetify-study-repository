<template>
  <v-row justify="center" align="center">
    <div>
      <v-row justify="center" align="center">
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="deep-orange lighten-2"
          class="ma-2 pa-2"
          width="5"
        />
        <div v-else>
          <ul class="ma-5">
            <li
              v-for="(item, index) in pageNationConf.currentPosts"
              :key="index"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </v-row>
      <div>
        <ul class="d-flex flex-row">
          <li v-for="num in pageNation" :key="num">
            {{ num }}
          </li>
        </ul>
      </div>
    </div>
  </v-row>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      pageNation: [],
      pageNationConf: {}
    }
  },
  computed: {
    ...mapGetters({ loading: 'module/common/loading' }),
    ...mapGetters({
      apiData: 'module/api/apiData'
      // pageNationConf: 'module/common/pabeNationConfig'
    })
  },
  mounted () {
    this.isLoading()
    this.getData({ url: 'https://jsonplaceholder.typicode.com/posts' })
    this.pageNationConf = this.pageNationConfig({
      datas: this.apiData,
      currentPage: 1,
      perPage: 10,
      upperPage: 2
    })
    this.setPageNumbers({
      startPage: this.pageNationConf.startPage,
      endPage: this.pageNationConf.endPage
    }, this.pageNation)
  },

  methods: {
    ...mapActions({
      isLoading: 'module/common/pageLoding',
      // pageNationConfig: 'module/common/pageNationConfig',
      getData: 'module/api/getData'
    }),
    setPageNumbers: ({ startPage, endPage }, arr) => {
      for (let i = startPage; i <= endPage; i++) {
        arr.push(i)
      }
    },
    pageNationConfig: (info) => {
      const { datas, currentPage, perPage, upperPage } = info
      const totalPage = Math.ceil(datas?.length / perPage)
      let startPage = currentPage - Math.round((upperPage - 1) / 2)
      let endPage = currentPage + Math.floor((upperPage - 1) / 2)
      if (startPage < 1) { endPage += 1 - startPage }
      startPage = Math.max(startPage, 1)
      if (endPage > totalPage) { startPage -= endPage - totalPage }
      endPage = Math.min(totalPage, endPage)
      const indexOfLastPost = info.currentPage * info.perPage
      const indexOfFirstPost = indexOfLastPost - info.perPage
      const currentPosts = info.datas && info.datas.slice(indexOfFirstPost, indexOfLastPost)
      return {
        totalPage,
        startPage,
        endPage,
        currentPosts,
        upperPage
      }
    }
  }
}
</script>
