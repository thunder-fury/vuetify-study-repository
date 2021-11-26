<template>
  <v-row justify="center" align="center">
    <!-- <v-col cols="12" sm="8" md="6">
      <v-card>
        <div v-for="i in items" :key="i.id">
          {{ item.message }}
          <v-autocomplete
            auto-select-first
            chips
            clearable
            deletable-chips
            dense
            filled
            multiple
            small-chips
            :items="i.item"
          />
        </div>
      </v-card>
    </v-col> -->
    <v-card class="mt-10 p-20">
      <v-btn
        class="ma-2"
        depressed
        color="primary"
        @click="add"
      >
        <span>addCount</span>
      </v-btn>
      <v-btn
        class="ma-2"
        depressed
        color="primary"
        @click="remove"
      >
        removeCount
      </v-btn>
      <div class="mb-6">
        <p class="d-flex justify-center align-center text-body-50">
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="deep-orange lighten-2"
            class="ma-2 pa-2"
            width="5"
          />
          <span v-else class="pa-3">{{ count }}</span>
        </p>
      </div>
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
  },
  computed: {
    ...mapState(['count']),
    ...mapState(['loading']),
    // exportしたmapGettersのkeyを引き受け`$store.state`の省略ができる
    ...mapGetters(['user']),
    // Objectでkeyを変更することができる
    ...mapGetters({
      userData: 'user'
    })
  },
  methods: {
    ...mapActions(['addAsync']),
    ...mapMutations(['increment', 'decrement', 'setLoading']),
    add () {
      // this.setLoading({ payload: true })
      this.addAsync()
      // this.setLoading({ payload: false })
    },
    remove () {
      this.decrement()
    }
  }
}
</script>
