<template>
    <NavbarRegistration/>
    <div class="f">
        <div class="form">
            <form v-on:submit.prevent="addUser">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="name"
                       placeholder="Ім'я" required v-model="user.name">
                <label for="name">Ім'я</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="lastName"
                       placeholder="Password" required v-model="user.lastName">
                <label for="lastName">Прізвище</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="email"
                       placeholder="Електронна пошта" required
                       v-model="user.email" v-on:input="checkEmail">
                <label for="email">Електронна пошта</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="password"
                       placeholder="Пароль" required v-model="user.password"
                       v-on:input="checkPassword">
                <label for="password">Пароль</label>
            </div>
                <div id="password_error" class="invalid"></div>
            <div class="form-floating">
                <input type="text" class="form-control" id="phone"
                       placeholder="Номер телефону" required
                       v-model="user.phone" v-mask="'+38(0##)-###-##-##'">
                <label for="phone">Номер телефону</label>
            </div>
                <div class="button">
                    <button type="submit"
                            class="btn btn-primary" value="Save">Зареєструватись
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import VueTheMask from 'vue-the-mask'
    import NavbarRegistration from "./NavbarRegistration.vue"
    import axios from 'axios';

    export default {
        name: 'UserForm',
        components: {
            NavbarRegistration

        },
        data(){
            return{
                users: '',
                user: {
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    phone: ''
                }
            }
        },
        methods: {
            addUser(){
                console.log("method addUser")
                fetch(`http://localhost:8080/addUser`, {
                    mode: "no-cors",
                    method: 'POST',
                    body: JSON.stringify(this.user)
                })
                    .then(data => {
                        console.log(data)
                        this.$router.push("/")
                    })
            },
            checkEmail() {
                const email = document.getElementById('email').value;
                const emailDiv = document.getElementById('email')
                if (!/\S+@\S+\.\S+/.test(email) ){
                    emailDiv.className = 'form-control is-invalid';
                } else {
                    emailDiv.className = 'form-control';
                }

            },
            checkPassword() {
                function validatePassword(password) {
                    let error = "";
                    if (/\s+/.test(password)){
                        error += "В паролі не має бути пробілів<br>";
                    }
                    if (password.length < 8 || password.length > 20){
                        error += "Пароль має бути від 8 до 20 символів<br/>";
                    }
                    if (!/[A-Z]+/.test(password)){
                        error += "В паролі має бути хоча б одна велика латинська" +
                            " літера<br/>";
                    }
                    if (!/[a-z]+/.test(password)){
                        error += "В паролі має бути хоча б одна маленька латинська літера<br/>";
                    }
                    if (/[\u0400-\u04FF]/.test(password)){
                        error += "Тільки латинські літери<br/>";
                    }
                    return error;

                }

                const password = document.getElementById('password').value
                const passwordDiv = document.getElementById('password')
                const error = document.getElementById('password_error')
                if (validatePassword(password) !== ""){
                    passwordDiv.className = 'form-control is-invalid';
                } else {
                    passwordDiv.className = 'form-control';
                }
                error.innerHTML = validatePassword(password);

            }
        }

    }

</script>

<style>
    .form-control{
        margin-bottom: 20px;
    }

    .form{
        width: 300px;
    }

    .f{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .button{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .invalid{
        color: red;
    }
</style>