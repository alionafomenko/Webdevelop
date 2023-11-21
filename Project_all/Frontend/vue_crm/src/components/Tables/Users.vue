<template>
    <div>
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Ім'я</th>
                    <th scope="col">Прізвище</th>
                    <th scope="col">Пошта</th>
                    <th scope="col">Номер телефону</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.ID">
                    <th scope="row">{{user.ID}}</th>
                    <td>{{user.NAME}}</td>
                    <td>{{user.LASTNAME}}</td>
                    <td>{{user.EMAIL}}</td>
                    <td>{{user.PHONE}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Users',
        data(){
            return{
                users: '',
                isAdmin: ''
            }
        },
        created() {
            axios.get(`http://aliona:8080/getUsers`, { withCredentials: true })
                .then((response) => {this.users = response.data.users;})
                .catch((error) => {console.log(error)})

        }
    }
</script>