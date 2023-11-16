<template>
    <Navbar :active-page="activePage"></Navbar>

</template>

<script>
    import Navbar from '../components/Main/NavbarMain.vue'

    export default {
        name: 'Home',
        components: {
            Navbar
        },
        data(){
            return{
                activePage: 'main'
            }
        }


    }
</script>

<style>

</style>