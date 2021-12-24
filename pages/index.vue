<template>
  <v-row justify="center" align="center">
    <v-card>
      <nuxt-link to="/blog">
        <v-btn>BLOG</v-btn>
      </nuxt-link>
    </v-card>
  </v-row>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      item: ['foo', 'bar', 'foos', 'bars'],
      items: [
        { item: ['Foo'] },
        { item: ['Bar'] }
      ]
    }
  }
  // computed: {
  //   ...mapState(['count', 'disabled', 'testData']),
  //   ...mapState(['loading']),
  //   // exportしたmapGettersのkeyを引き受け`$store.state`の省略ができる
  //   ...mapGetters(['user']),
  //   // Objectでkeyを変更することができる
  //   ...mapGetters({
  //     userData: 'user'
  //   })
  // },
  // mounted () {
  //   // this.$router.push('/about')
  // },
  // methods: {
  //   ...mapActions({ addAsync: 'addAsync', removeAsync: 'removeAsync' }),
  //   ...mapMutations(['increment', 'decrement', 'setLoading']),
  //   add () {
  //     this.addAsync()
  //   },
  //   remove () {
  //     this.removeAsync()
  //   }

  // }
}
</script>
