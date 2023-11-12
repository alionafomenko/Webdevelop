<template>
    <div >
        <h1 class="header">Publishing world</h1>
        <ul class="nav nav-underline ul">
            <li class="nav-item">
                <a class="nav-link"  href="/">Головна
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                   href="/BooksCatalog">Каталог книг</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Каталог авторів</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Корзина</a>
            </li>
        </ul>
    </div>
</template>

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