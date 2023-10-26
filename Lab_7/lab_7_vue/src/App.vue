<template>
  <header class="header">
    <a href="main.html"><img class="logo" src="./assets/logo1.jpg"
                             alt="Логотип"></a>
    <h1 class="animate">Publishing World</h1>
    <div class="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-btn" for="menu-toggle">
        <span></span>
      </label>

      <ul class="menu_box">
        <li><a class="menu-item" href="main.html">Головна</a></li>
        <li><a class="menu-item" href="faq.html">FAQ</a></li>
        <li><a class="menu-item" href="contacts.html">Контакти</a></li>
        <li><a class="menu-item" href="login.html">Вхід</a></li>
        <li><a class="menu-item" href="registration.html">Реєстрація</a></li>
        <li><a class="menu-item" href="table.html">Інформація про замовлення</a></li>
        <li><a class="menu-item" href="js.html">JS</a></li>
      </ul>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="content">
        <div class="wrapper">
          <form class="form" id="info">
            <h2>Реєстрація</h2>

            <email-component @email="showEmail"  />

            <password-componnent  ></password-componnent>

            <last-name-component @lastName="showLastName"
            ></last-name-component>

            <name-component @name="showName"></name-component>

            <third-name-component @thirdName="showThirdName"></third-name-component>

            <calendar-component @date="showDate"></calendar-component>

            <div class="input-box">
              <input class="phone" v-model="formData.phone"
                     v-mask="'(+38) 0## ###-##-##'"
                     placeholder="Номер телефона"
                     required>
            </div>

            <div class="input-box">
              <input list="group" name="group" id="groupNumber"
                     v-model="formData.group"
                     placeholder="Номер групи">
              <datalist id="group">
                <option value="ІА-21">ІА-21</option>
                <option value="ІА-22">ІА-22</option>
                <option value="ІА-23">ІА-23</option>
                <option value="ІА-24">ІА-24</option>
              </datalist>
            </div>


            <input type="radio"  name="sex" id="sex" v-model="formData.gender"
                   value="male"/>
            <label>Чоловік</label>
            <input type="radio" class="chooseSex" v-model="formData.gender"
                   name="sex" value="female"/>
            <label>Жінка</label><br/>
            <input class="fileButton" type="file"  accept="image/*">

            <button class="button1" type="button" v-on:click="registerUser">Sign up</button><br/><br/>

          </form>
        </div>
      </div>
    </div>
    <div class="table-container">
      <h2 class="title">Зареєстровані користувачі</h2>
      <table id="userTable">
        <thead>
        <tr>
          <th>Вибір</th>
          <th>Електронна пошта</th>
          <th>Прізвище</th>
          <th>Ім'я</th>
          <th>По-батькові</th>
          <th>Дата народження</th>
          <th>Номер групи</th>
          <th>Номер телефону</th>
          <th>Стать</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(u, index) in users" :key="index">
          <td><input type="checkbox" v-model="selectedRows[index]"></td>
          <td>{{ u.email }}</td>
          <td>{{ u.lastName }}</td>
          <td>{{ u.name }}</td>
          <td>{{ u.thirdName }}</td>
          <td>{{ u.date }}</td>
          <td>{{ u.group }}</td>
          <td>{{ u.phone }}</td>
          <td>{{ u.gender }}</td>
        </tr>
        <!-- Тут будуть рядки таблиці -->
        </tbody>
      </table>
      <div>
        <button class="button2" v-on:click="deleteSelectedRows">Видалити вибрані</button>
        <button class="button2" v-on:click="duplicateSelectedRows">Дублювати вибрані</button>
      </div>
    </div>
  </main>
  <footer>
    <p>&copy; 2023 Publishing World. Усі права захищені.</p>
  </footer>



</template>

<script>
import EmailComponent from "./components/EmailComponent";
import PasswordComponnent from "./components/PasswordComponnent";
import NameComponent from "@/components/NameComponent";
import LastNameComponent from "@/components/LastNameComponent";
import ThirdNameComponent from "@/components/ThirdNameComponent";
import CalendarComponent from "@/components/CalendarComponent";
import inputmask from 'inputmask';

  export default {
    name: 'App',
    components: {
      EmailComponent,
      PasswordComponnent,
      NameComponent,
      LastNameComponent,
      ThirdNameComponent,
      CalendarComponent
    },
    directives: { inputmask },
    data(){
      return{
        formData: {
          email: '',
          lastName: '',
          name: '',
          thirdName: '',
          date: '',
          group: '',
          phone: '',
          gender: '',

        },
        users: [],
        selectedRows: []

      }

    },
    methods: {
      registerUser() {
        this.users.push({ ...this.formData });
        this.formData = {
          phone: '',
          gender: '',
          group: ''
        };
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('thirdName').value = '';
        document.getElementById('date').value = '';
      },
      showEmail(data){
        this.formData.email = data;
      },
      showLastName(data){
        this.formData.lastName = data;
      },
      showName(data){
        this.formData.name = data;
      },
      showThirdName(data){
        this.formData.thirdName = data;
      },
      showDate(data){
        this.formData.date = data;
      },

      deleteSelectedRows() {
        for (let i = this.selectedRows.length - 1; i >= 0; i--) {
          if (this.selectedRows[i]) {
            this.users.splice(i, 1);
          }
        }
        this.selectedRows = [];
      },
      duplicateSelectedRows() {
        for (let i = this.selectedRows.length - 1; i >= 0; i--) {
          if (this.selectedRows[i]) {
            this.users.splice(i + 1, 0, { ...this.users[i] });
          }
        }
        this.selectedRows = [];
      },

    }
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #D8BFD8;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #D8BFD8;
}


.invalid{
  color: Red;
  font-size: 12px;
  text-align: left;
}


.header h1{
  margin-right: 90px;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 1.2;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

.animate {
  animation: colorChange 2s infinite alternate;
}

@keyframes colorChange {
  0% {
    color: #4B0082;
  }
  100% {
    color: #800080;
  }
}

.menu-btn{
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right:0;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 2;
  margin: 55px 30px;
}

.menu-btn > span,
.menu-btn > span::before,
.menu-btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #000000;
  transition-duration: .25s;
}
.menu-btn > span::before {
  content: '';
  top: -8px;
}
.menu-btn > span::after {
  content: '';
  top: 8px;
}

.menu_box{
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  margin: 5px;
  padding: 80px 0;
  list-style: none;
  background-color: #DDA0DD;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition-duration: .25s;
  z-index: 1;
}

.menu-item {
  display: block;
  padding: 12px 24px;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu-item:hover {
  background-color: #BA55D3;
  color: #000000;
  text-decoration: none;
}

#menu-toggle{
  opacity: 0;
}

#menu-toggle:checked ~ .menu-btn > span{
  transform: rotate(45deg);
}
#menu-toggle:checked ~ .menu-btn > span::before{
  top: 0;
  transform: rotate(0);
}
#menu-toggle:checked ~ .menu-btn > span::after{
  top: 0;
  transform: rotate(90deg);
}
#menu-toggle:checked ~ .menu_box{
  visibility: visible;
  right: 0;
}

.menu-btn{
  margin-right: 20px;
  margin-top: 55px;
}

.logo{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  width: 100px;
  height: auto;
  margin: 10px;
}

*{
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body{
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Устанавливаем минимальную высоту экрана вьюпорта */
  margin: 0;
}

main{
  background-color: #D8BFD8;
  flex: 1;
}

.container{
  display: flex;
  justify-content: center;
  margin: 20px;
}

.content{
  padding: 20px;
}

.wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 800px;

  border-radius: 15px;
  transition: 0.5s;
}

h2{
  font-size: 2em;
  text-align: center;
  color: black;
  transition: 0.5s;
}

.input-box{
  position: relative;
  width: 320px;
  margin:  30px 0;
}

.input-box input{
  width: 100%;
  height: 50px;
  border-radius: 7px;
  background: transparent;
  border: 3px solid black;
  outline: none;
  font-size: 1em;
  color: black;
  padding: 0 10px 0 25px;
  transition: 0.5s;
}

.input-box input::placeholder{
  color: black;
}

.phone{
  border-radius: 7px;
}


.chooseSex{
  margin-left: 30px;
}

.fileButton{
  height: 50px;
  margin-top: 20px;
}

.button1{
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: 2px solid #4B0082;
  outline: none;
  font-size: 1.1em;
  color: white;
  transition: 0.5s;
  text-align: center;
  background: #4B0082;

}

.button1:hover {
  scale: 1.1;
}

footer {
  text-align: center;
  background-color: #D8BFD8;
  color: #000000;
  padding-bottom: 20px;

}


.title{
  font-size: 2em;
  text-align: center;
  color: black;
  transition: 0.5s;
  margin-top: 70px;
}

.table-container {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 2px solid #000000;
  text-align: center;
  padding: 8px;
}

th{
  background-color: #4B0082;
  color: #FFFFFF;
}

tr{
  background-color: #DDA0DD;
}

tr:nth-child(even) {
  background-color: #E6E6FA;
}

/* Стилі для кнопок */
#deleteRows, #duplicateRows {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4B0082;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

#duplicateRows {
  background-color: #4B0082;
}

/* Стилі для чекбоксів */
input[type="checkbox"] {
  transform: scale(1.5);
}

.button2{
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: 2px solid #4B0082;
  outline: none;
  font-size: 1.1em;
  color: white;
  transition: 0.5s;
  text-align: center;
  background: #4B0082;
}

.button2:hover {
  opacity: 0.7;
}

</style>
