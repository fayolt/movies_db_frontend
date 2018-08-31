<template>
    <div class="box">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input has-text-centered" type="search" placeholder="» » find me a movie « «"
                    v-on:input="onInput" v-model="query">
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
            onInput: function () {
                this.$emit('search', this.query)
            }
        },
        beforeMount() {
            this.query = this.search_term
        }

    }
</script>

<style>

</style>