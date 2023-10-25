<template>
    <div class="input-box">
        <input type="text"
               placeholder="Прізвище" required
               v-on:input="checkName">
    </div>
    <div class="invalid" v-html="lastname_error"></div>

    <div class="input-box">
        <input type="text"
               placeholder="Ім'я"
               required v-on:input="checkName">
    </div>
    <div class="invalid" v-html="name_error"></div>

    <div class="input-box">
        <input type="text"
               placeholder="По-батькові"
               required v-on:input="checkName">
    </div>
    <div class="invalid">{{thirdname_error}}  </div>
</template>

<script>
    export default {
        name: 'NamesComponent',
        components: {},
        data(){
            return{
                lastname_error: '',
                name_error: '',
                thirdname_error: '',
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
                const lastName = event.target.value;
                const thirdName = event.target.value;

                this.name_error = validateName(name);
                this.lastname_error = validateName(lastName);
                this.thirdname_error = validateName(thirdName);
            },
        }
    }
</script>