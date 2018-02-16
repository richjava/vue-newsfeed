<template>
  <div class="hello">
    <div>
      <h3>Admin</h3>
    </div>
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
      loggedIn: true
    }
  }, created: function() {
    if (!this.loggedIn) {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
