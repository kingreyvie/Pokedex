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
        'George VI',
        'William II',
        'Elizabeth I',
        'William I'
      ],
      tagsTmpContainer: [],
      sortedTags: []
    }
  },
  methods: {
    getSortedList: function() {
      // clear the tags container
      this.tagsTmpContainer = []

      // Intl.Collator
      var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
      this.tags.map((n) => {
        this.tagsTmpContainer.push(n.split(" ")[0] + '_' + this.romanToNumber(n.split(" ").pop()))
      })

      setTimeout(() => {
        this.tagsTmpContainer.sort(collator.compare)
      }, 1000)

      setTimeout(() => {
        this.sortedTags = this.tagsTmpContainer.map((n) => ({name: n.split('_')[0], num: this.numberToRoman(n.split('_')[1])}))
        .map(({name, num}) => name + ' ' + num)
      }, 2000)
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
    },
    numberToRoman: function(num) {
      if (isNaN(num))
        return NaN;
      var digits = String(+num).split(""),
          key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"],
          roman = "",
          i = 3;
      while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman
      return Array(+digits.join("") + 1).join("M") + roman
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
