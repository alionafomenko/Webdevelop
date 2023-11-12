<template>
    <div class="shadow div p-3 mb-5 bg-body-tertiary rounded" v-for="book in
    books"  :key="book.id">
        <div v-for="author in authors" :key="author.id">
            <div class="book" v-if="author.id === book.authorId">
                <div class="title">
                    <div class="img">

                    </div>
                    <div>
                        <p>Назва: {{ book.title }}</p>
                        <p>Автор: {{ author.name }}  {{author.lastName}}</p>
                        <p>Мова: {{book.language}}</p>
                        <p>К-сть сторінок: {{book.pageAmount}}</p>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-success">{{book
                        .price}}.00</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Books',
        data() {
            return{
                books: '',
                authors: ''
            }
        },
        created() {
            axios.get(`http://localhost:8080/books`)
                .then(response => (this.books = response.data))
                .catch(error => console.log(error))
            axios.get(`http://localhost:8080/authors`)
                .then(response => (this.authors = response.data))
                .catch(error => console.log(error))


        }
    }

</script>

<style>
    .div{
        width: 1000px;
    }

    .book{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }

    .btn{
        margin: 10px;
        width: 100px;
        border-color: #4CC240;
        background-color: #4CC240;
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