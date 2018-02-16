<template>
  <div class="container">
    <div class="nav-container">
      <ul class="nav nav-tabs">
        <li class="active">
          <a data-toggle="tab" href="#i0">News Feed</a>
        </li>
        <li>
          <a data-toggle="tab" href="#i1">Favourites</a>
        </li>
      </ul>
      <div class="tab-content">
        <div id="i0" class="tab-pane fade in active">
          <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
          <Newslist v-bind:source="source"></Newslist>
        </div>
        <div id="i1" class="tab-pane">
          <Favouriteslist></Favouriteslist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SourceSelection from './SourceSelection'
import Newslist from './Newslist'
import Favouriteslist from './Favouriteslist'
import { db } from '../db'

export default {
  name: 'hello',
  data() {
    return {
      source: ''
    }
  },
  components: {
    Newslist,
    SourceSelection,
    Favouriteslist
  },
  methods: {
    sourceChanged: function(source) {
      this.source = source;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-pane{
  padding-top:20px;
}
</style>
