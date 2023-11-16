<template>
    <Navbar :active-page="activePage"></Navbar>
    <RegistrationForm/>
</template>

<script>
    import Navbar from '../components/Main/NavbarMain.vue'
    import RegistrationForm from
            "../components/Registration/RegistrationForm.vue";

    export default {
        name: 'Registration',
        components: {
            Navbar,
            RegistrationForm
        },
        data(){
            return{
                activePage: 'registration'
            }
        }

    }
</script>

<style>

</style>