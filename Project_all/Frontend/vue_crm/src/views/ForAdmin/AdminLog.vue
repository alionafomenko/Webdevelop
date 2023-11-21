<template>
    <div class="f">
        <div class="form">
            <form v-on:submit.prevent="logAdmin">
                <div class="form-floating">
                    <input type="email" class="form-control" id="email"
                           placeholder="Електронна пошта" required
                           v-model="admin.email" >
                    <label for="email">Електронна пошта</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password"
                           placeholder="Пароль" required
                           v-model="admin.password" >
                    <label for="password">Пароль</label>
                </div>
                <div class="button">
                    <button type="submit"
                            class="btn btn-primary" value="Save"> Увійти
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'AdminLog',
        components: {

        },
        data(){
            return{
                admin: {
                    email: '',
                    password: '',
                },
            }
        },
        methods: {
            async logAdmin() {
                console.log("method log admin")
                const res = await axios.post(`http://aliona:8080/loginAdmin`,
                    JSON.stringify(this.admin),
                    { withCredentials: true }
                )
                const login_data = await res.data.error;
                if (login_data === 'nouser'){
                    this.$router.push("/AdminLog");
                    const passwordDiv = document.getElementById('password')
                    const emailDiv = document.getElementById('email')
                    passwordDiv.className = 'form-control is-invalid';
                    emailDiv.className = 'form-control is-invalid';
                } else if ( login_data === 'invalidpassword'){
                    const passwordDiv = document.getElementById('password')
                    const emailDiv = document.getElementById('email')
                    emailDiv.className = 'form-control ';
                    passwordDiv.className = 'form-control is-invalid';
                    this.$router.push("/AdminLog");
                } else {
                    this.$router.push("/UsersTable");
                }



            },

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