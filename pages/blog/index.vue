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
          <!-- <ul class="ma-5">
            <li
              v-for="(item, index) in apiData"
              :key="index"
            >
              {{ item.id }}{{ item.title }}
            </li>
          </ul> -->
          <div
            v-for="(item, index) in apiData"
            :key="index"
            class="d-flex pa-2"
          >
            <v-card
              max-width="200"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>{{ item.title }}</v-card-title>
              </v-img>
              <!-- <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text> -->
              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  more
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-row>
      <div>
        <!-- <ul class="d-flex flex-row">
          <li v-for="num in pageNationNumber" :key="num">
            <a
              @click="push(num)"
            >{{ num }}</a>
          </li>
        </ul> -->
        <!-- <v-pagination
          v-model="currentPage"
          :length="15"
          :total-visible="pageNationConfig.totalPage"
        /> -->
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
      pageNationNumber: [],
      pageNation: {}

    }
  },

  computed: {
    ...mapGetters({
      loading: 'module/common/loading',
      currentPage: 'module/common/currentPage'
    }),
    ...mapGetters({
      apiData: 'module/api/apiData'
      // pageNationConf: 'module/common/pabeNationConfig'
    }),
    pageNum () {
      const num = this.$route.query.page ? this.$route.query.page : 1
      return num
    }

  },
  watch: {
  },
  mounted () {
    this.isLoading()
    this.getData({ url: 'https://notion-api.splitbee.io/v1/table/4a8363a71a1b4800b793f54fc692b938?v=eb8783b5792b48559283defeff31a9c9' })
    this.pageNation = this.pageNationConfig({
      datas: this.apiData,
      currentPage: Number(this.pageNum),
      perPage: 10,
      upperPage: 4
    })
    this.setPageNumbers({
      startPage: this.pageNation.startPage,
      endPage: this.pageNation.endPage
    }, this.pageNationNumber)
  },

  methods: {
    ...mapActions({
      isLoading: 'module/common/pageLoding',
      paginate: 'module/common/paginate',
      getData: 'module/api/getData'
    }),
    setPageNumbers: ({ startPage, endPage }, arr) => {
      for (let i = startPage; i <= endPage; i++) {
        arr.push(i)
      }
    },
    push: (num) => {
      console.log(num)
      // this.$router.push({
      //   path: '/blog',
      //   query: {
      //     page: num
      //   }
      // })
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

<style>
  .pageNum {
    list-style: none;
  }
</style>
