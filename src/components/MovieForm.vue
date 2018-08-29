<template>
    <div>
        <div class="container">
            <section>
                <h3 class="subtitle">Add a new movie</h3>
                <b-field>
                    <b-input placeholder="Title" type="search" icon="magnify"> </b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Link to image" icon="credit-card"></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Year" type="text" icon="email"></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Score" icon="credit-card"> </b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Rating" icon="credit-card"></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Color" icon="credit-card"></b-input>
                </b-field>

                <b-field label="Genre">
                    <b-taginput v-model="movie.genre"></b-taginput>
                </b-field>

            </section>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MovieForm',
    data: function() {
        return {
            movie:{}
        }
    }

}
</script>

<style>

</style>
