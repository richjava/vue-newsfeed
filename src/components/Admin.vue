<template>
  <div class="hello">
    <p>This is the Admin page</p>
    <router-link v-bind:to="'/admin'">Posts</router-link>
    <router-link v-bind:to="'/admin/comments'">Comments</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'admin',
  data() {
    return {
      loggedIn: false
    }
  }, created: function(){
    if(!this.loggedIn){
      this.$router.push('/login')
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
