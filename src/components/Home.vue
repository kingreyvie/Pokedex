<template lang="pug">
  div
    section
      div
        router-link(to='/search') Question 1 - Micro Project (Javascript only)
      div
        router-link(to='/royal/rumble') Question 2 - Royal Rumble

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
