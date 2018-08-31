<template>
    <div class="column is-one-third">
        <div class="card large round">
            <div class="card-image">
                <figure class="image">
                    <img v-bind:src="movie.image" alt="Image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4 no-padding">{{movie.title}}</p>
                        <div class="field is-grouped">
                            <div class="tags">
                                <span class="tag is-primary" v-for="(genre, index) in movie.genre" :key="index" v-if="index<movie.genre.length -1">{{genre}}</span>
                                <span class="tag is-primary">{{movie.genre[movie.genre.length-1]}}</span>
                            </div>
                        </div>
                        <div class="tags has-addons level-item">
                            <span class="tag is-rounded is-warning">{{movie.rating}}</span>
                            <span class="tag is-rounded">{{movie.year}}</span>
                        </div>
                    </div>
                    <div class="media-right">
                        <a class="button delete is-large is-dark" v-on:click="handleDelete(movie.objectID)"></a>
                    </div>
                </div>
                <div class="media level-item has-text-centered">
                    <figure v-for="(facet, index) in movie.actor_facets" :key="index" class="tooltip" v-bind:data-tooltip="facet.split('|')[1]" v-if="index<8">
                        <img class="author-image" v-bind:src="facet.split('|')[0]">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Movie',
        props: {
            movie: Object
        },
        methods: {
            handleDelete: function (id) {
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
    .author-image {
        top: -30px;
        left: 50%;
        width: 60px;
        height: 50px;
        margin-left: -15px;
        border: 3px solid #ccc;
        border-radius: 50%;
    }
</style>