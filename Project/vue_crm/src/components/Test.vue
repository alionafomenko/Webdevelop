<template>
    <div>
        <div >
            <div >
                <div >
                    <h1 class="text-center">
                        View Users
                    </h1>
                    <!--<a href="/add" class="btn btn-primary"> Add user</a>-->
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Phone number</th>
                            <!--<th scope="col">Action</th>-->
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
                            <!--<td>
                                <a class="btn btn-primary"
                                   :href="'/edit/${user.id}'">Edit</a>
                                <button
                                        class="btn btn-danger mx-2"
                                        @click="deleteUsers(user.id)">Delete
                                </button>
                            </td>-->
                        </tr>
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Test',
        data() {
            return{
                users: '',
                title: 'Users'
            }
        },
        created() {
            axios.get(`http://localhost:8080/users`)
                .then(response => (this.users = response.data))
                .catch(error => console.log(error))


        }

    }
</script>