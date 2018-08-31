<template>
    <div>
        <div class="container">
            <h3 class="title">Here You Go!!!</h3>
            <div class="columns is-centered is-mobile is-multiline">
                <div class="column is-one-third">
                    <img src="https://bulma.io/images/placeholders/300x225.png"/> <!-- v-bind:src="movie.image -->
                </div>
                <div class="column is-one-third">
                    <div class="columns">
                        <div class="column">
                            <b-input placeholder="Title" type="text" v-model="movie.title"></b-input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-input v-model="movie.image" placeholder="Link to image" type="text"></b-input>
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
                <div class="column is-two-thirds">
                    <div class="columns">
                        <div class="column">
                            <b-taginput v-model="movie.genre"></b-taginput>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-taginput v-model="movie.actors"></b-taginput>
                        </div>
                    </div> 
                    <div class="columns">
                        <div class="column">
                            <b-taginput v-model="movie.alternative_titles"></b-taginput>
                        </div>
                    </div> 
                    <div class="columns">
                        <div class="column">
                            <b-taginput v-model="movie.actor_facets"></b-taginput>
                        </div>
                    </div>
                </div>
                
                <div class="column is-two-thirds">
                    <div class="columns">
                        <div class="column is-one-third">
                            <button class="button" v-on:click="handleClear()">Reset</button>
                        </div>
                        <div class="column is-one-third"></div>
                        <div class="column is-one-third">
                            <button class="button is-primary" v-on:click="handleSave()">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <h3 class="subtitle">Add a new movie</h3>
        <article class="media">
            <figure class="media-left">
                <img v-bind:src="movie.image">
            </figure>
            <figure class="media-content">
                <b-field>
                    <b-input placeholder="Title" type="search" icon="magnify"> </b-input>
                </b-field>
                <b-field>
                    <b-input v-model="movie.image" placeholder="Link to image" icon="credit-card"></b-input>
                </b-field>
                <div class="columns">
                    <div class="column">
                        <b-field>
                            <b-input placeholder="Year" type="text" icon="email"></b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field>
                            <b-input placeholder="Score" icon="credit-card"> </b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field>
                            <b-input placeholder="Color" icon="credit-card"></b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field>
                            <b-input placeholder="Rating" icon="credit-card"></b-input>
                        </b-field>
                    </div>
                </div> 
            </figure>
        </article>
        <div class="columns">
            <div class="column is-1">
                <div class="label">Genre</div>
            </div>
            <div class="column">
                <b-field>
                    <b-taginput v-model="movie.genre"></b-taginput>
                </b-field> 
            </div>
        </div>
        
        
        <b-field>
            <b-taginput v-model="movie.actors"></b-taginput>
        </b-field> 
        <b-field >
            <b-taginput v-model="movie.actor_facets"></b-taginput>
        </b-field> 
        <b-field>
        </b-field>  -->
            
    </div>
    
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
            // axios.post('http://localhost:4000/api/movies', this.movies)
            // .then(() =>{
            //     this.$toast.open({
            //         type: 'is-success',
            //         message: 'moovie deleted successfuly'
            //     });
            // })
            // .catch(error => {
            //     this.$toast.open({
            //         type: 'is-danger',
            //         message: error.response.data
            //     });
            // })
            console.log(this.movie)
        },
        handleClear: function(){
            this.movie = {}
        }
    }

}
</script>

<style>
    .columns.is-mobile > .column.is-one-third {
        align-self: center;
    }
</style>
