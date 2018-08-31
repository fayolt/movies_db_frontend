<template>
    <div>
        <div class="container">
            <div class="section">
                <search-box :search_term="search_term" @search="handleSearch"></search-box>
                <div class="columns is-multiline is-centered">
                    <movie v-for="movie in movies" :key="movie.objectID" :movie="movie"></movie>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import Movie from '@/components/Movie.vue'
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'Movies',
  components: {
    SearchBox,
    Movie
  },
  data: function() {
        return {
            search_term: '',
            movies: []
        }
    },
    methods:{
        handleSearch (event) {
            console.log("event received")
            console.log('movies', event)
            this.index.search(event, (err, content) => {
                // console.log(content.hits);
                this.movies = content.hits;
                // console.log(this.movies);
            })
        }
    }
}
</script>