<template>
    <main>
        <Navbar></Navbar>
        <div class="my-5">
            <div class="mx-auto w-25" style="max-width: 100%;">
                <h2 class="text-center mb-3">Add User</h2>
            </div>
            <form @submit.prevent="addUser">
             <!-- name-->
                <div class="row">
                    <div class="col-md-12 form-group mb-5">
                        <label for="name" class="form-label"></label>
                        <input type="text" name="name" id="name"
                               class="form-control" placeholder="Name"
                               required v-model="user.name">
                    </div>
                </div>
                <!--last name-->
                <div class="row">
                    <div class="col-md-12 form-group mb-5">
                        <label for="lastName" class="form-label"></label>
                        <input type="text" name="lastName" id="lastName"
                               class="form-control" placeholder="LastName"
                               required v-model="user.lastName">
                    </div>
                </div>
                <!-- email-->
                <div class="row">
                    <div class="col-md-12 form-group mb-5">
                        <label for="email" class="form-label"></label>
                        <input type="text" name="email" id="email"
                               class="form-control" placeholder="Email"
                               required v-model="user.email">
                    </div>
                </div>
                <!-- password-->
                <div class="row">
                    <div class="col-md-12 form-group mb-5">
                        <label for="password" class="form-label"></label>
                        <input type="text" name="password" id="password"
                               class="form-control" placeholder="Password"
                               required v-model="user.password">
                    </div>
                </div>
                <!-- phone-->
                <div class="row">
                    <div class="col-md-12 form-group mb-5">
                        <label for="phone" class="form-label"></label>
                        <input type="text" name="phone" id="phone"
                               class="form-control" placeholder="Phone"
                               required v-model="user.phone">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 form-group">
                        <input type="submit" value="Submit"
                               class="btn btn-primary w-100">

                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/Main/NavbarMain.vue'
    export default {
        name: 'AddUser',
        components: {
            Navbar
        },
        data(){
            return{
                user: {
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    phone: ''
                }
            }
        },
        methods: {
            addUser(){
                console.log("method addUser")
                fetch(`http://localhost:8080/addUser`, {
                    mode: "no-cors",
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                })
                .then(data => {
                    console.log(data)
                    this.$router.push("/")
                })
            }
        }
    }
</script>