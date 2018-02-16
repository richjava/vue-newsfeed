<template>
  <div id="app">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <router-link v-bind:to="'/admin'">Admin</router-link>
    <router-link v-bind:to="'/login'">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #42b983;
}

.media-object {
  width: 128px;
  padding: 10px;
}

.media {
  border-top: 1px solid lightgray;
  padding-top: 20px;
  text-align: left;
}

.media .glyphicon {
  color: #ccc;
}

a {
  color: #42b983;
}
</style>
