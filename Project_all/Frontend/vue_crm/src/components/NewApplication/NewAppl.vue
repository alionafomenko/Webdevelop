<template>
    <div class="mb-3">
        <label class="form-label">Назва книги</label>
        <input type="text" class="form-control" id="title"
               v-model="book.title">
    </div>
    <div class="mb-3">
        <label  class="form-label">Анотація</label>
        <textarea class="form-control" id="annotation" rows="3" maxlength="1000"
                  v-model="book.annotation" v-on:input="maxSymbols"></textarea>
    </div>
    <div class="amount-symbols">
        <p>{{amount}}/1000</p>
    </div>
    <button type="button" class="btn btn-primary"
            v-on:click="sendApplication">Відправити
    </button>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'NewApp',
        data(){
            return{
                book:{
                    title: '',
                    annotation: ''
                },
                amount: ''


            }
        },
        methods: {
            sendApplication(){
                axios.post(`http://aliona:8080/sendApplication`,
                    JSON.stringify(this.book), { withCredentials: true })
                this.$router.push("/NewApplication");
                this.book.title = '';
                this.book.annotation = '';

            },
            maxSymbols(){
                const annotation = document.getElementById('annotation').value;
                this.amount = annotation.length;

            }

        }


    }

</script>

<style>
    .mb-3{
        width: 500px;
    }

    .amount-symbols{
        display: flex;
        justify-content: flex-end;
    }
</style>