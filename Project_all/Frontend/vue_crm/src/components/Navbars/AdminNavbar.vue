<template>
    <div>
        <h1 class="header">Publishing world</h1>
        <ul class="nav nav-underline ul">
            <li class="nav-item">
                <a class="nav-link" id="users"  href="/UsersTable">Користувачи
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="authors"
                   href="/AuthorsTable">Автори
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="books"  href="/BooksTable">Книги
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="orders"  href="/OrdersTable">Замовлення
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="applications"
                   href="/ApplicationsTable">Заявки
                </a>
            </li>
            <li class="nav-item button">
                <button type="button" class="btn btn-primary" v-on:click="logout">Вийти
                </button>
            </li>
        </ul>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: 'NavbarAdmin',
        props: {
            // Оголошення пропсу для отримання значення від батьківського компонента
            activePage: {
                type: String,
                required: true,
            },

        },

        mounted() {
            const activePage = document.getElementById(this.activePage);

            if (activePage) {
                console.log(activePage, 'active')
                activePage.classList.add('active');
                console.log(activePage.classList.add('active'));
            } else {
                console.error(`Element with ID ${this.activePage} not found.`);
            }
            console.log(this.isAdmin);
        },
        methods:{
            logout(){
                axios.post(`http://aliona:8080/logout`,'',{ withCredentials:
                        true })
                    .catch((error) => {console.log(error)})
                this.$router.push("/Admin");
            },


        },

    }
</script>

<style>
    .nav-item a{
        margin: 20px;
    }

    .header{
        text-align: center;
    }

    .ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .button{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>