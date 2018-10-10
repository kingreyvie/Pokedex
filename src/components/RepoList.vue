<template lang="pug">
  div
    section
      .title {{this.$route.params.username}}'s projects
      router-link(:to='`/search`') < Go back to search
      hr
      div(v-if="repos.length > 0")
        ul
          li(v-for='repo in repos')
            router-link(:to='`/repo/${$route.params.username}/${repo.name}`') {{ repo.name }}
      div(v-else)
        div(v-if="isUserExist")
          | Loading repos...
        div(v-else)
          | Error 404: User repositories not found.

</template>

<script>
import axios from 'axios'

export default {
  name: 'RepoList',
  data () {
    return {
      repos: [],
      isUserExist: true
    }
  },
  mounted () {
    axios
      .get(`https://api.github.com/users/${this.$route.params.username}/repos`)
      .then(response => {
        if (response.status === 200) {
          this.repos = response.data
        }
      }).catch(err => {
        this.isUserExist = false
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul > li {
  padding: 10px;
}
</style>
