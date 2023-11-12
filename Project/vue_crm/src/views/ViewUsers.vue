<template >
    <main>
        <Navbar/>
        <!--table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">
                            View Users
                    </h1>
                    <a href="/add" class="btn btn-primary"> Add user</a>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users"  :key="user.id">
                                <th scope="row">{{user.id}}</th>
                                <td>{{user.name}}</td>
                                <td>{{user.lastName}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.password}}</td>
                                <td>{{user.phone}}</td>
                                <td>
                                    <a class="btn btn-primary"
                                       :href="'/edit/${user.id}'">Edit</a>
                                    <button
                                            class="btn btn-danger mx-2"
                                            @click="deleteUsers(user.id)">Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    </main>
</template>

<script>
import Navbar from '../components/Main/NavbarMain.vue'

export default {
    name: 'ViewUsers',
    components: {
        Navbar
    },
    data(){
        return{
            users: []
        }
    },
    beforeMount(){
        this.getUsers();
    },

    methods: {
        getUsers(){
            fetch(`http://localhost:8080/users`)
            .then(res => res.json)
            .then(data => {
                this.users = data
                console.log(data)
            })
        },
        deleteUsers(){
            fetch(`http://localhost:8080/userDelete/${id}`,{
                    mode: "no-cors",
                    method: 'POST'
                })
                .then(data => {
                    console.log(data)
                    this.getUsers()
                })
        }
    },

}

</script>

