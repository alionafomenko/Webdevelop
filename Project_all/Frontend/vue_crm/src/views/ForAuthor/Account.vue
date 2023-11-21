<template>
    <Navbar :active-page_2="activePage_2"></Navbar>
    <AuthorAccount></AuthorAccount>
</template>

<script>
    import Navbar from '../../components/Navbars/AuthorNavbar.vue'
    import AuthorAccount from '../../components/Accounts/AuthorAccount.vue'
    export default {
        name: 'Account',
        components: {
            Navbar,
            AuthorAccount
        },
        data(){
            return{
                activePage_2: 'account'
            }
        }

    }
</script>

<style>

</style>