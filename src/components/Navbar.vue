<template>
  <div class="hero-head">
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span>
              <router-link to="/add">Add</router-link>
            </span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <span class="icon">
                <i class="magnify"></i>
                <router-link class="button is-white is-outlined" to="/add">Add</router-link>
                </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
  .control {
    align-self: center;
  }
</style>