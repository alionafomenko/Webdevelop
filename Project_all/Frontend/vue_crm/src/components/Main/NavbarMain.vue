<template>
    <div>

    <h1 class="header">Publishing world</h1>
    <ul class="nav nav-underline ul">
        <li class="nav-item">
            <a class="nav-link" id="main" href="/">Головна
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="registration" href="/Registration">
                Реєстрація</a>
        </li>
        <li  class="nav-item">
            <a class="nav-link" id="login" href="/Login">Вхід</a>
        </li>
    </ul>
    </div>

</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            // Оголошення пропсу для отримання значення від батьківського компонента
            activePage: {
                type: String,
                required: true,
            }
        },
        mounted() {
            const activePage = document.getElementById(this.activePage);
            if (activePage) {
                const id = document.getElementById('main');
                const registration = document.getElementById('registration');
                const login = document.getElementById('login');
                id.className = 'nav-link';
                registration.className = 'nav-link';
                login.className = 'nav-link';
                activePage.classList.add('active');
            } else {
                console.error(`Element with ID ${this.activePage} not found.`);
            }
        }
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

</style>