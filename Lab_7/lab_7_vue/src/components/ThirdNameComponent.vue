<template>
    <div class="input-box">
        <input type="text" v-model="thirdName" id="thirdName"
               placeholder="По-батькові"
               required v-on:input="checkName" @input="getThirdName">
    </div>
    <div class="invalid">{{thirdname_error}}  </div>
</template>

<script>
    export default {
        name: 'ThirdNameComponent',
        components: {},
        data(){
            return{
                thirdName: '',
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
                const thirdName = event.target.value;
                this.thirdname_error = validateName(thirdName);
            },
            getThirdName(){
                this.$emit('thirdName', this.thirdName)
            }
        }
    }
</script>