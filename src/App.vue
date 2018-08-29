<template>
  <div id="app">
    <nav class="navbar has-shadow is-primary">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="#">MoviesDB</router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item is-tab m-l-10" to="/">Home</router-link>
            <router-link class="navbar-item is-tab" to="/about">About</router-link>
          </div>
          <div class="navbar-end">
            <div class="field"></div>
            <b-input icon="magnify" type="search" placeholder="Search..."></b-input>
          </div>
        </div>
      </div>
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
