<template>
    <div class="tab" v-if="isAdmin === 'true'">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Назва</th>
                <th scope="col">Автор</th>
                <th scope="col">Мова</th>
                <th scope="col">К-сть сторінок</th>
                <th scope="col">Ціна</th>
                <th scope="col">Дія</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in books" :key="book.ID">
                <th scope="row">{{book.ID}}</th>
                <td><input type="text" v-model="book.TITLE"></td>
                <td>{{book.NAME}}  {{book.LASTNAME}}</td>
                <td><input type="text" v-model="book.LANGUAGE"></td>
                <td><input type="text" v-model="book.PAGE_AMOUNT"></td>
                <td><input type="text" v-model="book.PRICE"></td>
                <td class="buttons"><button type="button"
                                            class="btn btn-primary"
                            v-on:click="save(book.ID, book.TITLE, book.LANGUAGE,
                             book.PAGE_AMOUNT, book.PRICE)">Зберегти
                </button>
                    <button type="button" class="btn btn-danger"
                            v-on:click="del(book.ID)"> Видалити
                    </button></td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Books',
        data() {
            return{
                books: '',
                isAdmin: ''
            }
        },
        created() {
            axios.get(`http://aliona:8080/isAdmin`, { withCredentials: true })
                .then((response) => {this.isAdmin = response.data.isAdmin;})
                .catch((error) => {console.log(error)})

            axios.get(`http://aliona:8080/getBooks`, { withCredentials: true })
                .then((response) => {this.books = response.data.books;})
                .catch((error) => {console.log(error)})
        },
        methods: {
            save(bId, bTitle, bLanguage, bPageAmount, bPrice){
                axios.post(`http://aliona:8080/saveBook`,
                    JSON.stringify({bId, bTitle, bLanguage,
                        bPageAmount, bPrice}), { withCredentials: true }
                );


            },
            del(bookId){
                axios.post(`http://aliona:8080/deleteBook`,
                    JSON.stringify({bookId}), { withCredentials: true }
                );
                this.$router.go('/BooksTable');

            }
        }

    }

</script>

<style>
    .btn{
        font-size: 13px;
        margin: 5px;
    }

    .tab{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        flex-direction: column;
    }

    .buttons{
        display: flex;
    }
</style>