<template>
  <nav class="navbar has-shadow is-primary">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">MoviesDB</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- <router-link class="navbar-item is-tab" to="/">Home</router-link> -->
          <router-link class="navbar-item is-tab" to="/add">Add</router-link>
        </div>
        <div class="navbar-end">
          <b-input icon="magnify" type="search" placeholder="Search..." v-on:input="onChange()" v-model="search_term"></b-input>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data: function() {
      return {
        search_term: ""
    }
  },
  methods: {
    onChange: function() {
      console.log('we are in change')
      this.index.search(this.search_term, function(err, content) {
        console.log(content.hits);
      })
    }
  }

}
</script>

<style>
  .control {
    align-self: center;
  }
</style>
