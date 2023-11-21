<template>
    <AdminNavbar :active-page="activePage"/>
    <Orders/>
</template>

<script>
    import AdminNavbar from "../../../components/Navbars/AdminNavbar.vue";
    import Orders from "../../../components/Tables/Orders.vue";

    export default {
        name: 'OrdersT',
        components: {
            AdminNavbar,
            Orders
        },
        data(){
            return{
                activePage: 'orders'
            }
        }

    }
</script>