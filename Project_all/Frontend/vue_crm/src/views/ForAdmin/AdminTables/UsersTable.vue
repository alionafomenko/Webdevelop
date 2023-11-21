<template>
    <AdminNavbar :active-page="activePage"/>
    <Users/>
</template>

<script>
    import AdminNavbar from "../../../components/Navbars/AdminNavbar.vue";
    import Users from "../../../components/Tables/Users.vue";
    export default {
        name: 'UsersT',
        components: {
            AdminNavbar,
            Users
        },
        data(){
            return{
                activePage: 'users'
            }
        }

    }
</script>