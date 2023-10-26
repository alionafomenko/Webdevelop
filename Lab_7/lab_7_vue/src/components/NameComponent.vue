<template>

    <div class="input-box">
        <input type="text"
               placeholder="Ім'я"
               required v-on:input="checkName">
    </div>
    <div class="invalid" v-html="name_error"></div>

</template>

<script>
    export default {
        name: 'NameComponent',
        components: {},
        data(){
            return{
                name_error: '',
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

                const name = event.target.value;

                this.name_error = validateName(name);
            },
        }
    }
</script>