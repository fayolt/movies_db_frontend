<template>
  <div class="hero-head">
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="../assets/search-by-algolia-dark-background.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span>
              <router-link to="/add">Add</router-link>
            </span>
          </span>
        </div>
        <div class="navbar-menu" v-show="show">
          <div class="navbar-end">
            <span class="navbar-item">
              <router-link class="button is-white is-outlined" to="/add">Add New Movie</router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function () {
      return {
        show: true
      }
    },
    watch:{
      $route (to, from) {
        if(to.path == '/add')
          this.show = false
      }
    } 
  }
</script>

<style>
  .control {
    align-self: center;
  }
</style>