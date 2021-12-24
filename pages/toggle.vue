<template>
  <div>
    <v-btn @click="togglePopUp()">
      click
    </v-btn>
    <div v-if="isToggle">
      ひらき
    </div>
    <div v-else>
      とじ
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isToggle: false
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    togglePopUp () {
      this.isToggle = !this.isToggle
    }
  }
}
</script>
