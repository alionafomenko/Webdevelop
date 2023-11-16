<template>
    <div class="shadow div p-3 mb-5 bg-body-tertiary rounded" v-for="book in
    books"  :key="book.ID">
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
            <button type="button" class="btn btn-success">{{book.PRICE}}
                .00</button>
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
            }
        },
        created() {
            console.log('book')
            axios.get(`http://localhost:8080/getBooks`)
                .then((response) => {this.books = response.data.books;})
                .catch((error) => {console.log(error)})
        }
    }

</script>

<style>
    .div{
        width: 1000px;
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