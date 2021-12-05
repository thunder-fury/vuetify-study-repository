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
          <!-- <ul>
            <li
              v-for="(item, index) in posts"
              :key="index"
            >
              {{ item.title }}
            </li>
          </ul> -->
        </div>
      </v-row>
    </div>
  </v-row>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({ loading: 'module/common/loading' }),
    ...mapGetters({ apiData: 'module/api/apiData' })
  },
  mounted () {
    this.isLoading()
    this.getData({ url: 'https://jsonplaceholder.typicode.com/posts' })
    console.log(this.apiData)
  },
  methods: {
    ...mapActions({ isLoading: 'module/common/pageLoding', getData: 'module/api/getData' })
  }
}
</script>
