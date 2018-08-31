<template>
    <div class="box">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input has-text-centered" type="search" placeholder="» » » » » » find me a movie « « « « « «"
                    v-on:input="onChange" v-model="query">
            </div>
            <div class="control">
                <a class="button is-info" v-on:click="onChange">Search</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchBox',
        props: ['search_term'],
        data: function () {
            return {
                query: ''
            }
        },
        methods: {
            onChange: function () {
                // console.log('search emitted')
                this.$emit('search', this.query)
                console.log('search box', this.query)
                console.log('search box', this.search_term)
            }
        },
        beforeMount() {
            this.query = this.search_term
        }

    }
</script>

<style>

</style>