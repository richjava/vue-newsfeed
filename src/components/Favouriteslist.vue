<template>
  <div class="newslist">
    <div class="container">
      <div class="jumbotron">
        <h2>
          <span class="glyphicon glyphicon-heart"></span>&nbsp;Favourites
        </h2>
      </div>
      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a v-bind:href="article.url" target="_blank">{{ article.title }}</a>
            </h4>
            <h5>
              <i>By {{ article.author }}</i>
            </h5>
            <p>{{ article.description }}</p>
          </div>
          <div class="media-right">
            <span class="glyphicon glyphicon-remove" v-on:click="removeFavourite(article, $event)"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '../db'

export default {
  name: 'favouriteslist',
  firebase: {
    articles: {
      source: db.ref('articles'),
      cancelCallback(err) {
        console.log(err);
      }
    }
  },
  methods: {
    removeFavourite: function(article, evt) {
      db.ref('articles').child(article['.key']).remove()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
