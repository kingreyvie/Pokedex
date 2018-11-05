<template lang="pug">
  section.poke-list
    input(@keyup="searchPokemon" v-model="q" class="searchPoke" placeholder="search for pokemon")
    poke-cell(v-for="pokeClass in pokeClasses" :key="pokeClass.id" :pokeKey="pokeClass.id" :pokeClass="pokeClass" :sprites="sprites")
</template>

<script>
import PokeCell from './PokeCell.vue'
import { pokeClasses } from './pokeClasses';
import sprites from '../assets/sprites.png';

export default {
  name: 'PokeList',
  components: {
    PokeCell
  },
  data () {
    return {
      q: '',
      pokeClasses: pokeClasses,
      sprites: sprites
    }
  },
  methods: {
    searchPokemon: function(e) {
      e.preventDefault()
      if (this.q) {
        let context = this
        this.pokeClasses = pokeClasses.filter(function(el) {
          return el.id === context.q
        })
      } else {
        this.pokeClasses = pokeClasses
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
