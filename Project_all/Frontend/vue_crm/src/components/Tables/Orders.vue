<template>
    <div>
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID користувача</th>
                    <th scope="col">Назва книги</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders" :key="order.USER_ID">
                    <td>{{order.USER_ID}}</td>
                    <td>{{order.TITLE}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Orders',
        data(){
            return{
                orders: '',
                isAdmin: ''
            }
        },
        created() {
            axios.get(`http://aliona:8080/getOrders`, { withCredentials: true })
                .then((response) => {this.orders = response.data.orders;})
                .catch((error) => {console.log(error)})

        }
    }
</script>