<template lang="pug">
  section
    button.poke-cell(@click="handleOnClick(pokeKey)" v-bind:style='getPokeCellStyle')
    .pokeName {{pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}}

</template>

<script>
import axios from 'axios'

export default {
  name: 'PokeCell',
  props: ['pokeKey', 'pokeName', 'pokeClass', 'sprites'],
  data () {
    return {
      id: '',
      name: '',
      sprite: '',
      type: '',
      moves: []
    }
  },
  computed: {
    getPokeCellStyle: function () {
      return { 
          'background-image': `url(${this.sprites})`,
          'background-position': this.pokeClass.backgroundPosition
        }
    },
  },
  methods: {
    handleOnClick(pokeKey) {
      this.$store.dispatch('showLoader', true)
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeKey}/`)
        .then(response => {
          if (response.status === 200) {
             response.data.moves.foreach(a=>{
               this.moves.push(a)
             })
            this.$store.dispatch('showLoader', false)
            let data = response.data
            let pokeData = {
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
              type: data.types[0].type.name,
              moves: this.moves
            }
            this.$store.dispatch('showPokemon', pokeData)
          }
        }).catch(err => {
          this.$store.dispatch('showLoader', false)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
