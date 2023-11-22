<template>
    <Navbar :active-page="activePage"></Navbar>
    <div class="text-center">
        <h2>Для користувачів</h2>
        <p class="text">Якщо ви звичайний користувач і хочите замовити
            предпродаж
        книги<br/> -
            зробіть вхід або зареєструйтеся як читач</p>
        <h2>Для авторів</h2>
        <p class="text">Якщо ви автор і хочите залишити заявку видавництву на
            публікацію
        вашої книги<br/>  -
            зробіть вхід або зареєструйтеся як письменник</p>
    </div>

</template>

<script>
    import Navbar from '../components/Main/NavbarMain.vue'

    export default {
        name: 'Home',
        components: {
            Navbar
        },
        data(){
            return{
                activePage: 'main'
            }
        }


    }
</script>

<style>
    .text{
        font-size: 20px;
    }
</style>