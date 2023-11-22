<template>
    <AdminNavbar :active-page="activePage"/>
    <Applications/>
</template>

<script>
    import AdminNavbar from "../../../components/Navbars/AdminNavbar.vue";
    import Applications from "../../../components/Tables/Applications.vue";

    export default {
        name: 'ApplicationsT',
        components: {
            AdminNavbar,
            Applications
        },
        data(){
            return{
                activePage: 'applications'
            }
        }

    }
</script>