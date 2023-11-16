<template>
    <Navbar :active-page="activePage"/>
    <div class="f">
        <div class="form">
            <form v-on:submit.prevent="logUser">
                <div class="form-floating">
                    <input type="email" class="form-control" id="email"
                           placeholder="Електронна пошта" required
                           v-model="user.email" >
                    <label for="email">Електронна пошта</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password"
                           placeholder="Пароль" required
                           v-model="user.password" >
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

    import Navbar from "../Main/NavbarMain.vue"
    import axios from 'axios';

    export default {
        name: 'UserLog',
        components: {
            Navbar

        },
        data(){
            return{
                user: {
                    email: '',
                    password: '',
                },
                activePage: 'login'
            }
        },
        methods: {
            async logUser() {
                console.log("method log User")
               const res = await axios.post(`http://localhost:8080/login`,
                   JSON.stringify(this.user),
               )
                const login_data = await res.data.error;
                if (login_data === 'nouser'){
                    this.$router.push("/UserLog");
                    const passwordDiv = document.getElementById('password')
                    const emailDiv = document.getElementById('email')
                    passwordDiv.className = 'form-control is-invalid';
                    emailDiv.className = 'form-control is-invalid';
                } else if ( login_data === 'invalidpassword'){
                    const passwordDiv = document.getElementById('password')
                    const emailDiv = document.getElementById('email')
                    emailDiv.className = 'form-control ';
                    passwordDiv.className = 'form-control is-invalid';
                    this.$router.push("/UserLog");
                } else {
                    this.$router.push("/");
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