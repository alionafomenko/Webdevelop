<template>
    <Navbar></Navbar>
    <Books/>
</template>

<script>
    import Navbar from '../components/BooksCatalog/NavbarBooks.vue'
    import Books from "../components/BooksCatalog/Books.vue";

    export default {
        name: 'BooksCatalog',
        components: {
            Navbar,
            Books
        },


    }
</script>