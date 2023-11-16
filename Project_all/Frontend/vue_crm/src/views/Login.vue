<template>
    <Navbar :active-page="activePage"></Navbar>
    <LoginForm/>

</template>

<script>
    import Navbar from '../components/Main/NavbarMain.vue'
    import LoginForm from
            "../components/Login/LoginForm.vue";

    export default {
        name: 'Login',
        components: {
            Navbar,
            LoginForm
        },
        data(){
            return{
                activePage: 'login'
            }
        }

    }
</script>

<style>

</style>