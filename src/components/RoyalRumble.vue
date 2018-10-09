<template lang="pug">
  div
    section
      .title Royal Rumble
      router-link(to='/') < Go back to main menu
      hr
      b-field(label='Add some royal name')
        b-taginput(@keyup.native.enter="getSortedList" v-model='tags', ellipsis='', icon='label', placeholder='Add a royale name')
      p.content(v-if="sortedTags.length > 0")
        b Sorted:
        ul
        li(v-for='sortedTag in sortedTags')
          a {{sortedTag}}
</template>

<script>
import axios from 'axios'

export default {
  name: 'RepoList',
  data () {
    return {
      tags: [
        'Louis IX',
        'Louis VIII',
        'David II'
      ],
      sortedTags: []
    }
  },
  methods: {
    getSortedList: function() {
      this.sortedTags = this.tags.map((n) => ({name: n, num: this.romanToNumber(n.split(" ").pop())}))
      .sort((a, b) => {
        if (a.name < b.name) 
          return -1
        if (a.name > b.name) 
          return 1
        return 0
      })
      .map(({name, num}) => name)
    },
    romanToNumber: function(roman) {
      if (roman === "")           
        return 0;
      if (roman.startsWith("L")) 
        return 50 + this.romanToNumber(roman.substr(1));
      if (roman.startsWith("XL")) 
        return 40 + this.romanToNumber(roman.substr(2));
      if (roman.startsWith("X"))  
        return 10 + this.romanToNumber(roman.substr(1));
      if (roman.startsWith("IX")) 
        return 9  + this.romanToNumber(roman.substr(2));
      if (roman.startsWith("V"))  
        return 5  + this.romanToNumber(roman.substr(1));
      if (roman.startsWith("IV")) 
        return 4  + this.romanToNumber(roman.substr(2));
      if (roman.startsWith("I"))  
        return 1  + this.romanToNumber(roman.substr(1));
      return 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
