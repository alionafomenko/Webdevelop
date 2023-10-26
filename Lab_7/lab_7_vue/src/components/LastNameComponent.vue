<template>
    <div class="input-box">
        <input type="text" v-model="lastName" id="lastName"
               placeholder="Прізвище" required
               v-on:input="checkName" @input="getLastName">
    </div>
    <div class="invalid" v-html="lastName_error"></div>

</template>

<script>
    export default {
        name: 'LastNameComponent',
        components: {},
        data(){
            return{
                lastName: '',
                lastName_error: '',
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
                this.lastName_error = validateName(lastName);
            },
            getLastName(){
                this.$emit('lastName', this.lastName)
            }
        }
    }
</script>