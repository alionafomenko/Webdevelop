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
                <tr v-for="author in authors" :key="author.ID">
                    <th scope="row">{{author.ID}}</th>
                    <td>{{author.NAME}}</td>
                    <td>{{author.LASTNAME}}</td>
                    <td>{{author.EMAIL}}</td>
                    <td>{{author.PHONE}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Authors',
        data(){
            return{
                authors: '',
                isAdmin: ''
            }
        },
        created() {
            axios.get(`http://aliona:8080/getAuthors`, { withCredentials:
                    true })
                .then((response) => {this.authors = response.data.authors;})
                .catch((error) => {console.log(error)})

        }
    }
</script>