<template lang="pug">
  section.detail-view
    breeding-rhombus-spinner(v-if="$store.state.showLoader" :animation-duration="2000" :size="30" :color="'white'")
    .columns.mobile-indcator  
      .column
        .color-change
      .column.indicator
        .dot.red
        .dot.yellow
        .dot.green
    img.sprite-image(:src="$store.state.pokemon.sprite" alt="sprite")
    //- div.data-wrapper
    //-   h1.data-name ID: {{$store.state.pokemon.id}} {{$store.state.pokemon.name}}
    //-   p.data-char Type: {{$store.state.pokemon.type}}
    .columns.controls
      .column
        .dot
      .column
        .light.red
      .column
        .light.blue
      //- .column.absolute
      //-   .horizontal
      //-   .vertical
    .green-screen
      p.data-id ID: {{$store.state.pokemon.id}} 
      p.data-name Name: {{$store.state.pokemon.name}}
      p.data-char Type: {{$store.state.pokemon.type}}
      
      p(v-for="move in moves").data-moves Moves: {{move.moves}}
    .block
    button(@click="showMoves()" style='background-color: darkred; font-weight: bolder; font-size: 20px; border: 1px white solid') Show Moves
</template>



<script>
import { BreedingRhombusSpinner } from 'epic-spinners'
import axios from 'axios'

export default {
  name: 'PokeCell',
  props: ['pokeKey', 'pokeClass', 'sprites'],
  components: {
    BreedingRhombusSpinner
  },
  data () {
    return {
      moves: []
    }
  },
  computed: {
    getPokeCellStyle: function () {
      return { 
        'background-image': `url(${this.sprites})`,
        'background-position': this.pokeClass.backgroundPosition
      }
    }
  },
    methods: {
      showMoves() {
    this.$store.dispatch('showLoader', true)
    axios
      .get(`https://pokeapi.co/api/v2/move/${this.$store.state.pokemon.id}/`)
      .then(response => {
        if (response.status === 200) {
          this.$store.dispatch('showLoader', false)
          let data = response.data
          console.log(data)
          let pokeData = {
            all: data
          }
          
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
