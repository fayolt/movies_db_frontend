<template>
    <div>
        <navbar :search_term="search_term" @search="handleSearch"></navbar>
        <div class="container">
            <div class="columns is-multiline is-centered">
                <movie v-for="movie in movies" :key="movie.objectID" :movie="movie"></movie>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import Movie from '@/components/Movie.vue'

export default {
  name: 'Movies',
  components: {
    Navbar,
    Movie
  },
  data: function() {
        return {
            search_term: '',
            movies: []
        }
    },
    methods:{
        handleSearch () {
            console.log("event received")
            this.index.search(this.search_term, (err, content) => {
                // console.log(content.hits);
                this.movies = content.hits;
                // console.log(this.movies);
            })
            console.log("outside promise")
            console.log(this.movies);
        }
    }
}
</script>