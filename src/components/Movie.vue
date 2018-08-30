<template>
    <div class="column is-half">
        <div class="media">
            <figure class="media-left">
                <img v-bind:src="movie.image">
            </figure>
            <div class="media-content">
                <h4 class="title">{{movie.title}}</h4>
            </div>
            <div class="columns is-multiline">
                <figure v-for="(facet, index) in movie.actor_facets" :key="index">
                    <img v-bind:src="facet.split('|')[0]">
                </figure>
            </div>
            <div class="media-right">
                <button class="delete" v-on:click="handleDelete(movie.objectID)"></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Movie',
    props: {movie: Object},
    methods: {
        handleDelete: function(id){
            axios.delete(`http://localhost:4000/api/movies/${id}`)
            .then(() => {
                this.$toast.open({
                    type: 'is-success',
                    message: 'moovie deleted successfuly'
                });
            })
            .catch(error => {
                this.$toast.open({
                    type: 'is-danger',
                    message: error.response.data
                });
            })
        }
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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