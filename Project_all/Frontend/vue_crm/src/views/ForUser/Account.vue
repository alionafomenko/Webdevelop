<template>
    <Navbar :active-page_2="activePage_2"></Navbar>
    <UserAcc></UserAcc>
</template>

<script>
    import Navbar from '../../components/Navbars/UserNavbar.vue'
    import UserAcc from '../../components/Accounts/UserAcc.vue'

    export default {
        name: 'Account',
        components: {
            Navbar,
            UserAcc
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