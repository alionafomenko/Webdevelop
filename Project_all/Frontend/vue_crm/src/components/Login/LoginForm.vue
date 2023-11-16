<template>
    <div class="t">
        <table class="table table-hover">
            <tbody>
            <tr >
                <td class="text-center">
                    <a href="/UserLog">&#10004  Я читач</a></td>
            </tr>
            <tr>
                <td class="text-center">
                    <a href="/AuthorLog">&#10004  Я письменник</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'LoginForm'
    }
</script>


<style>
    .table{
        width: 200px;
    }

    .t{
        display: flex;
        justify-content: center;
    }

    .text-center a{
        text-decoration: none;
        color: black;

    }

</style>