<template>
  <div class="container">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
  </div>
    
</template>

<script>
import SourceSelection from './SourceSelection'
import Newslist from './Newslist'
export default {
  name: 'hello',
  data () {
    return {
     source: ''
    }
  },
  components: {
    Newslist,
    SourceSelection
  },
  methods: {
    sourceChanged: function(source){
      this.source = source;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
