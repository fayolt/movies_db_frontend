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
          <b-input icon="magnify" type="search" placeholder="Search..." v-on:input="onChange()" v-model="query"></b-input>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['search_term'],
  data: function(){
    return {
      query: ''
    }
  },
  methods: {
    onChange: function() {
      console.log('search emitted')
      this.$emit('search', this.query)
    }
  },
  beforeMount() {
    this.query = this.search_term
  }

}
</script>

<style>
  .control {
    align-self: center;
  }
</style>
