<template>
    <div class="input-box">
        <input type="text"
               placeholder="Електронна пошта"
               required
               v-on:input="checkEmail">
    </div>
    <div class="invalid" v-html="email_error"></div>
</template>

<script>
    export default {
        name: 'EmailComponent',
        components: {},
        data(){
            return{
                email_error: ''
            }
        },
        methods: {
            checkEmail(event) {
                function validateEmail(email) {
                    let error = "";
                    if (!/\S+@\S+\.\S+/.test(email)) {
                        error += "Неправильно введена пошта<br/>";
                    }
                    if (/[\u0400-\u04FF]/.test(email)) {
                        error += "Тільки латинські літери<br/>";
                    }
                    return error;
                }

                const email = event.target.value;

                this.email_error = validateEmail(email);
            },
        }
    }
</script>
