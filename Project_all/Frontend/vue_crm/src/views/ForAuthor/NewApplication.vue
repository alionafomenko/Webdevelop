<template>
    <Navbar :active-page_2="activePage_2"></Navbar>
    <NewAppl/>
</template>

<script>
    import Navbar from '../../components/Navbars/AuthorNavbar.vue';
    import NewAppl from "../../components/NewApplication/NewAppl.vue";


    export default {
        name: 'Account',
        components: {
            Navbar,
            NewAppl

        },
        data(){
            return{
                activePage_2: 'newApplication'
            }
        }

    }
</script>

<style>

</style>