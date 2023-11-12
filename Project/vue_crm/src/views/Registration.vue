<template>
    <Navbar></Navbar>
    <RegistrationForm/>

</template>

<script>
    import Navbar from '../components/Registration/NavbarRegistration.vue'
    import RegistrationForm from
            "../components/Registration/RegistrationForm.vue";

    export default {
        name: 'Registration',
        components: {
            Navbar,
            RegistrationForm
        }

    }
</script>

<style>

</style>