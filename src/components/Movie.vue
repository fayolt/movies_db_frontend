<template>
    <!--<div class="media">
            <div class="columns is-multiline">
                <figure v-for="(facet, index) in movie.actor_facets" :key="index">
                    <img v-bind:src="facet.split('|')[0]">
                </figure>
            </div>
        </div> -->
    <div class="column is-one-third">
        <div class="card large round">
            <div class="card-image ">
                <figure class="image">
                    <img v-bind:src="movie.image" alt="Image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <!-- <div class="media-left">
                            <figure class="image is-96x96">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="Image">
                            </figure>
                        </div> -->
                    <div class="media-content">
                        <p class="title is-4 no-padding">{{movie.title}}</p>
                        <p><span v-for="(genre, index) in movie.genre" :key="index" class="title is-6"> {{genre}} | </span></p>
                        <p class="subtitle is-6">{{movie.rating}} | {{movie.score}}</p>
                    </div>
                    <div class="media-right">
                        <a class="button delete is-large is-warning" v-on:click="handleDelete(movie.objectID)"></a>
                    </div>
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam
                    tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis
                    totam! Labore reprehenderit beatae magnam animi!
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
</style>