<template lang="pug">
  section.detail-view
    img.sprite-image(:src="$store.state.pokemon.sprite" alt="sprite")
    div.data-wrapper
      h1.data-name ID: {{$store.state.pokemon.id}} {{$store.state.pokemon.name}}
      p.data-char Type: {{$store.state.pokemon.type}}

</template>

<script>
export default {
  name: 'PokeCell',
  props: ['pokeKey', 'pokeClass', 'sprites'],
  data () {
    return {
    }
  },
  computed: {
    getPokeCellStyle: function () {
      return { 
          'background-image': `url(${this.sprites})`,
          'background-position': this.pokeClass.backgroundPosition
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
