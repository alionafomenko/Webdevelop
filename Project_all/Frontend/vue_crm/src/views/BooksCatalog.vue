<template>
    <Navbar :active-page="activePage"></Navbar>
    <Books/>
</template>

<script>
    import Navbar from '../components/Main/NavbarMain.vue'
    import Books from "../components/BooksCatalog/Books.vue";

    export default {
        name: 'BooksCatalog',
        components: {
            Navbar,
            Books
        },
        data(){
            return{
                activePage: 'bookCatalog',
            }
        }


    }
</script>