<template>
    <AdminNavbar :active-page="activePage"/>
    <Books/>
</template>

<script>
    import AdminNavbar from "../../../components/Navbars/AdminNavbar.vue";
    import Books from "../../../components/Tables/Books.vue";

    export default {
        name: 'AuthorsT',
        components: {
            AdminNavbar,
            Books
        },
        data(){
            return{
                activePage: 'books'
            }
        }

    }
</script>