<template>
  <div class="container source-selection">
      <div class="jumbotron">
        <h2>
          <span class="glyphicon glyphicon-list-alt"></span>&nbsp;News List
        </h2>
        <h4>Select News Source</h4>
        <select class="form-control" v-on:change="sourceChanged">
          <option value="">Please select news source...</option>
          <option v-for="source in sources" v-bind:value="source.id">{{ source.name }}</option>
        </select>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sourceselection',
  data() {
    return {
      sources: [],
      source: ''
    }
  },
  methods: {
    sourceChanged: function(evt) {
      for (var i = 0; i < this.sources.length; i++) {
        if (this.sources[i].id === evt.target.value) {
          this.source = this.sources[i];
        }
      }
      this.$emit('sourceChanged', evt.target.value);
    }
  },
  created: function() {
    this.$http.get('https://newsapi.org/v2/sources?apiKey=490cb422b79149ae85bdf2b85d62a848')
      .then(response => {
        this.sources = response.body.sources;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
