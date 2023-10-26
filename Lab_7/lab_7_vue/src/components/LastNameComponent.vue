<template>
    <div class="input-box">
        <input type="text"
               placeholder="Прізвище" required
               v-on:input="checkName">
    </div>
    <div class="invalid" v-html="lastname_error"></div>

</template>

<script>
    export default {
        name: 'LastNameComponent',
        components: {},
        data(){
            return{
                lastname_error: '',
            }
        },
        methods: {
            checkName(event) {
                function validateName(name) {
                    let error = "";
                    if (/\s+/.test(name.trim())){
                        error += "Не має бути пробілів<br/>";
                    }
                    if (name.length > 15){
                        error += "Має бути до 15 символів<br/>";
                    }
                    if (/[A-Z]+/.test(name) || /[a-z]+/.test(name)){
                        error += "Не має бути латинських літер<br/>";
                    }
                    return error;

                }

                const lastName = event.target.value;
                this.lastname_error = validateName(lastName);
            },
        }
    }
</script>