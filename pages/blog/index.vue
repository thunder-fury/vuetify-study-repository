<template>
  <v-row justify="center" align="center">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="deep-orange lighten-2"
      class="ma-2 pa-2"
      width="5"
    />
    <div v-else>
      <ul>
        <li
          v-for="(item, index) in posts"
          :key="index"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </v-row>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      data: ''
    }
  },
  computed: {
    ...mapState(['testData', 'loading', 'posts'])
  },
  mounted () {
    // this.firstLoding()
    this.getData()
    // eslint-disable-next-line no-console
    console.log(this.posts)
  },
  // eslint-disable-next-line vue/order-in-components
  async fetch () {
    this.data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    this.setData(this.data)
  },
  methods: {
    ...mapActions({ pageLoding: 'pageLoding', getData: 'getData' }),
    ...mapMutations(['setData', 'setLoading']),
    firstLoding () {
      this.pageLoding()
    },

    getNewsDatas (endPoint) {
      fetch(endPoint).then((res) => {
        this.setData(res)
      }).catch((err) => {
        alert(err)
      })
    }
  }
}
</script>
