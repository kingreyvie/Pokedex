<template lang="pug">
  div
    section
      .title Micro Project
      router-link(to='/') < Go back to main menu
      hr
      b-field(label='Search for github user repos')
        b-input(@keyup.native.enter="search" v-model='user', placeholder='e.g. kelvinsantos')

</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    search: function(event) {
      this.$router.push(`/repos/${this.user}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
