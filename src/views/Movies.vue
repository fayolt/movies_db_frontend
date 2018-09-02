<template>
    <div class="b">
        <div class="container">
            <div class="section">
                <search-box :search_term="search_term" @search="handleSearch"></search-box>
                <div class="columns is-multiline is-centered">
                    <movie v-for="movie in displayed_movies" :key="movie.objectID" :movie="movie"
                    @delete="handleDelete"></movie>
                </div>
                <b-pagination class="is-info" v-if="movies.length>0"
                    :total.sync="movies.length"
                    :per-page="perPage"
                    :simple="false"
                    :order="'is-centered'"
                    :current.sync="current"
                    v-on:change="handleDisplay">
                </b-pagination>
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
            movies: [],
            displayed_movies: [],
            perPage: 3,
            current: 1
        }
    },
    methods:{
        handleSearch: function (event) {
            this.index.search(event, (err, content) => {
                this.movies = content.hits;
                this.handleDisplay();
            })
        },
        handleDisplay: function() {
            this.displayed_movies = this.movies.slice((this.current * this.perPage) - this.perPage, (this.current * this.perPage))
        },
        handleDelete: function (event) {
            console.log(this.movies.length, this.movies)
            this.movies = this.movies.filter(movie => {
                return movie.objectID != event;
            });
            this.handleDisplay();
            console.log(this.movies.length, this.movies)
        }
    }
}
</script>
<style scoped>
    .b { 
    /* The image used */
    background-image: url("../assets/bg.png");

    /* Full height */
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: repeat-x;
    background-size: cover;
    }
</style>
