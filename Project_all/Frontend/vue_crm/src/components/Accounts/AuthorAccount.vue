<template>
    <div>
        <div v-for="author in author" :key="author.ID">
            <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Ім'я </th>
                    <td>{{author.NAME}}</td>
                </tr>
                <tr>
                    <th scope="row">Прізвище</th>
                    <td>{{author.LASTNAME}}</td>
                </tr>
                <tr>
                    <th scope="row">Номер телефону</th>
                    <td>{{author.PHONE}}</td>
                </tr>
                <tr>
                    <th scope="row">Пошта</th>
                    <td>{{author.EMAIL}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="logout">Вийти
        </button>
        <h3 class="text-center">Мої заявки</h3>
        <div class="shadow div p-3 mb-5 bg-body-tertiary rounded"
             v-for="application in application"  :key="application.ID">
            <div class="title">
                   {{application.BOOK_TITLE}}
            </div>
            <div class="status">
                {{application.STATUS}}
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'AuthorAcc',
        data(){
            return{
                author: '',
                application: ''
            }
        },
        created() {
            axios.get(`http://aliona:8080/getAllAuthorInf`, { withCredentials:
                    true })
                .then((response) => {this.author = response.data.author;
                    this.application = response.data.application})
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




    .title{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
</style>