<template lang="pug">
  div
    section
      .title {{this.$route.params.repo}}
      router-link(:to='`/repos/${this.$route.params.username}`') < Go back to {{this.$route.params.username}}'s repos
      hr
      div(v-html='content')
</template>

<script>
import axios from 'axios'

export default {
  name: 'RepoList',
  data () {
    return {
      content: 'Loading content...'
    }
  },
  mounted () {
    const options = {
      method: 'GET',
      headers: { 'Accept': 'application/vnd.github.html' },
      url: `https://api.github.com/repos/${this.$route.params.username}/${this.$route.params.repo}/readme`
    }
    axios(options)
      .then(response => {
        if (response.status === 200) {
          this.content = response.data
        }
      }).catch(err => {
        this.content = `Error 404: README.md not found.`
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
