<template>
    <div class="tab">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Автор</th>
                <th scope="col">Назва книги</th>
                <th scope="col">Статус</th>
                <th scope="col">Дія</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="application in applications" :key="application.ID">
                <th scope="row">{{application.ID}}</th>
                <td>{{application.NAME}}  {{application.LASTNAME}}</td>
                <td>{{application.BOOK_TITLE}}</td>
                <td><select class="form-select"
                         aria-label="Default select example"
                            v-model="application.STATUS">
                    <option value="НОВА">НОВА</option>
                    <option value="ВІДХИЛЕНА">ВІДХИЛЕНА</option>
                    <option value="ПРИЙНЯТА">ПРИЙНЯТА</option>
                    <option value="ОПУБЛІКОВАНА">ОПУБЛІКОВАНА</option>
                </select>
                </td>
                <td class="buttons"><button
                        v-on:click="save(application.ID ,application.STATUS)"
                        type="button"
                        class="btn btn-primary">Зберігти</button>
                    <button v-if="application.STATUS ===
                'ПРИЙНЯТА'"  type="button" class="btn btn-success"
                            v-on:click="addBook(application.ID)">Додати у
                        каталог</button>
                     </td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Applications',
        data() {
            return {
                applications: '',
            }
        },
        created() {
            axios.get(`http://aliona:8080/getApplications`, {
                withCredentials: true
            })
                .then((response) => {
                    this.applications = response.data.applications;
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log(this.applications);
        },
        methods: {
            save(id, status) {
                axios.post(`http://aliona:8080/saveStatus`,
                    JSON.stringify({id, status}), {withCredentials: true}
                );

            },
            addBook(appId){
                console.log('meth add')
                axios.post(`http://aliona:8080/addBook`,
                    JSON.stringify({appId}), {withCredentials: true}
                );
                this.$router.go('/ApplicationsTable');
            }

        }
    }

</script>

<style>
    .btn{
        font-size: 13px;
        margin: 5px;
    }

    .tab{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        flex-direction: column;
    }

    .buttons{
        display: flex;
    }
</style>