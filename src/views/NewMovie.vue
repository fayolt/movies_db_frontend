<template>
    <div>
        <navbar></navbar>
        <movie-form></movie-form>
    </div>
</template>

<script>
import MovieForm from '@/components/MovieForm.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar,
        MovieForm
    },
}
</script>

<style>

</style>
