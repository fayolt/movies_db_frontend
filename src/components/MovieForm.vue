<template>
    <article class="message is-primary">
        <div class="message-body">
            <div class="columns is-centered is-mobile is-multiline">
                <div class="column is-3">
                    <img class="movie-image" v-bind:src="movie.image"/>
                </div>
                <div class="column is-6">
                    <div class="columns">
                        <div class="column">
                            <b-input placeholder="Movie Title" type="text" v-model="movie.title"></b-input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-input v-model="movie.image" placeholder="Link to movie image" type="text"></b-input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-quarter">
                            <b-input placeholder="Year" type="number" min="1900" max="2018" v-model="movie.year"></b-input>
                        </div>
                        <div class="column is-one-quarter">
                            <b-input placeholder="Score" type="number" min="0" max="10" v-model="movie.score"></b-input>
                        </div>
                        <div class="column is-one-quarter">
                            <b-input placeholder="Color" type="text" v-model="movie.color"></b-input>
                        </div>
                        <div class="column is-one-quarter">
                            <b-input placeholder="Rating" type="number" min="0" max="10" v-model="movie.rating"></b-input>
                        </div>
                    </div>
                </div>
                <div class="column is-9">
                    <div class="columns">
                        <div class="column">
                            <b-field horizontal label="Genre">
                                <b-taginput v-model="movie.genre"></b-taginput>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field horizontal label="Actors">
                                <b-taginput v-model="movie.actors"></b-taginput>
                            </b-field> 
                        </div>
                    </div> 
                    <div class="columns">
                        <div class="column">
                            <b-field horizontal label="Other Titles">
                                <b-taginput v-model="movie.alternative_titles"></b-taginput>
                            </b-field>
                        </div>
                    </div> 
                    <div class="columns">
                        <div class="column">
                            <b-field horizontal label="Actors Facets">
                                <b-taginput v-model="movie.actor_facets"></b-taginput>
                            </b-field>
                        </div>
                    </div>
                </div>
                
                <div class="column is-1 is-offset-6">
                    <button class="button" v-on:click="handleClear()">Reset</button>
                </div>
                <div class="column is-1 is-offset-1">
                    <button class="button is-primary" v-on:click="handleSave()">Add</button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MovieForm',
    data: function() {
        return {
            movie: {}
        }
    },
    methods: {
        handleSave: function() {
            axios.post('http://localhost:4000/api/movies', {movie: this.movie})
            .then(() =>{
                this.$toast.open({
                    type: 'is-success',
                    message: 'moovie deleted successfuly'
                });
                this.$router.push('/')
            })
            .catch(error => {
                this.$toast.open({
                    type: 'is-danger',
                    message: error.response.data
                });
            })
        },
        handleClear: function(){
            this.movie = {}
        }
    }
}
</script>

<style>
    .movie-image {
        top: -30px;
        left: 50%;
        width: 160px;
        height: 160px;
        margin-left: -15px;
        border: 3px solid #3a416f;
        border-radius: 50%;
    }
    .columns.is-mobile > .column.is-one-third {
        align-self: center;
    }
    .message {
        background-color: whitesmoke;
        border-radius: 4px;
        font-size: 1rem;
        margin-top: 1rem;
    }
</style>
