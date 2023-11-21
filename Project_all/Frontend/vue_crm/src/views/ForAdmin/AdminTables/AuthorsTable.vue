<template>
    <AdminNavbar :active-page="activePage"/>
    <Authors/>
</template>

<script>
    import AdminNavbar from "../../../components/Navbars/AdminNavbar.vue";
    import Authors from "../../../components/Tables/Authors.vue";
    export default {
        name: 'AuthorsT',
        components: {
            AdminNavbar,
            Authors
        },
        data(){
            return{
                activePage: 'authors'
            }
        }

    }
</script>