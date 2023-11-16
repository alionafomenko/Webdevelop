<template>
    <div>

    <h1 class="header">Publishing world</h1>
    <ul class="nav nav-underline ul">
        <li class="nav-item">
            <a class="nav-link" id="main" href="/">Головна
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="bookCatalog" href="/BooksCatalog">Каталог
                книг</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="authorCatalog"
               href="/AuthorCatalog">Каталог авторів</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pocket" href="/Pocket">Корзина</a>
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