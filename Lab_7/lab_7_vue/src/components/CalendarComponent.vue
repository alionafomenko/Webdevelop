<template>
    <div class="input-box">
        <input type="date" v-model="date" id="date"
               min="1900-01-01"  max="2023-10-27" v-on:input="checkAge"
               @input="getDate"/>
    </div>
    <div class="invalid" v-html="age_error"></div>
</template>

<script>
    export default {
        name: 'CalendarComponent',
        components: {},
        data(){
            return{
                date: '',
                age_error: ''
            }
        },
        methods: {
            checkAge(event) {
                function validateAge(date) {
                    let error = "";
                    let date1 = new Date(date);
                    var month_diff = Date.now() - date1.getTime();
                    var age_dt = new Date(month_diff);
                    var year = age_dt.getUTCFullYear();
                    var age = Math.abs(year - 1970);
                    if (age < 18){
                        error += "Вам немає ще 18 років";
                    }
                    return error;
                }

                const date = event.target.value;
                this.age_error = validateAge(date);

            },
            getDate(){
                this.$emit('date', this.date)
            }
        }
    }
</script>