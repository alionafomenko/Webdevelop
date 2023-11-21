<template>
    <Navbar :active-page_2="activePage_2"></Navbar>
    <Books/>
</template>

<script>
    import Navbar from '../../components/Navbars/UserNavbar.vue'
    import Books from "../../components/BooksCatalog/Books.vue";

    export default {
        name: 'BooksCatalog',
        components: {
            Navbar,
            Books
        },
        data(){
            return{
                activePage_2: 'bookCatalog',
            }
        }


    }
</script>