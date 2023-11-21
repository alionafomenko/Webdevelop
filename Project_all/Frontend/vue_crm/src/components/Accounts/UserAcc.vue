<template>
    <div>
        <div v-for="user in user" :key="user.ID">
            <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Ім'я </th>
                    <td>{{user.NAME}}</td>
                </tr>
                <tr>
                    <th scope="row">Прізвище</th>
                    <td>{{user.LASTNAME}}</td>
                </tr>
                <tr>
                    <th scope="row">Номер телефону</th>
                    <td>{{user.PHONE}}</td>
                </tr>
                <tr>
                    <th scope="row">Пошта</th>
                    <td>{{user.EMAIL}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="logout">Вийти
        </button>
        <h3 class="text-center">Мої замовлення</h3>
        <div class="shadow div p-3 mb-5 bg-body-tertiary rounded" v-for="book in
    order"  :key="book.ID">
            <div class="title">
                <div class="img">
                </div>
                <div>
                    <p>Назва: {{ book.TITLE }}</p>
                    <p>Автор: {{ book.NAME }}  {{book.LASTNAME}}</p>
                    <p>Мова: {{book.LANGUAGE}}</p>
                    <p>К-сть сторінок: {{book.PAGE_AMOUNT}}</p>
                </div>
            </div>
            <div>
                <p>{{book.PRICE}} .00</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'UserAcc',
        data(){
            return{
                user: '',
                order: ''
            }
        },
        created() {
            axios.get(`http://aliona:8080/getAllUserInf`, { withCredentials:
                    true })
                .then((response) => {this.user = response.data.user;
                                    console.log(response.data.user.name);
                                     this.order = response.data.order})
                .catch((error) => {console.log(error)})
        },
        methods:{
            logout(){
                axios.post(`http://aliona:8080/logout`,'',{ withCredentials:
                        true })
                    .catch((error) => {console.log(error)})
                this.$router.push("/");
            }

        }
    }
</script>

<style>
    .div{
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }



    .img{
        width: 100px;
        height: 160px;
        margin-right: 20px;
        background-color: #EBEBEB;
    }

    .title{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
</style>