<template>
    <div class="input-box">
        <input type="password"
               placeholder="Пароль"
               required
               v-on:input="checkPassword">
    </div>
    <div class="invalid" v-html="password_error"></div>
</template>

<script>
    export default {
        name: 'PasswordComponnent',
        components: {},
        data(){
            return{
                password_error: ''
            }
        },
        methods: {
            checkPassword(event) {
                function validatePassword(password) {
                    let error = "";
                    if (/\s+/.test(password)){
                        error += "В паролі не має бути пробілів<br/>";
                    }
                    if (password.length < 8 || password.length > 15){
                        error += "Пароль має бути від 8 до 15 символів<br/>";
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

                const password = event.target.value;
                this.email_error = validatePassword(password);

            },
        }
    }
</script>