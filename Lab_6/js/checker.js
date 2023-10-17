function checkEmail() {
    function validateEmail(email) {
        let error = "";
        if (!/\S+@\S+\.\S+/.test(email)){
            error += "Неправильно введена пошта<br/>";
        }
        if (/[\u0400-\u04FF]/.test(email)){
            error += "Тільки латинські літери<br/>";
        }
        return error;
    }

    const email = document.getElementById('email').value;
    const error = document.getElementById('email_error');

    error.innerHTML = validateEmail(email);


}

function checkPassword() {
    function validatePassword(password) {
        let error = "";
        if (/\s+/.test(password)){
            error += "В паролі не має бути пробілів<br>";
        }
        if (password.length < 8 || password.length > 15){
            error += "Пароль має бути від 8 до 15 символів<br/>";
        }
        if (!/[A-Z]+/.test(password)){
            error += "В паролі має бути хоча б одна велика латинська" +
                " літера<br/>";
        }
        if (!/[a-z]+/.test(password)){
            error += "В паролі має бути хоча б одна маленька латинська літера<br/>";
        }
        if (/[\u0400-\u04FF]/.test(password)){
            error += "Тільки латинські літери<br/>";
        }
        return error;

    }

    const password = document.getElementById('password').value;
    const error = document.getElementById('password_error');

    error.innerHTML = validatePassword(password);

}

function checkName(sender) {
    function validateName(name) {
        let error = "";
        if (/\s+/.test(name.trim())){
            error += "Не має бути пробілів<br>";
        }
        if (name.length > 15){
            error += "Має бути до 15 символів<br/>";
        }
        if (/[A-Z]+/.test(name) || /[a-z]+/.test(name)){
            error += "Не має бути латинських літер<br/>";
        }
        return error;

    }

    const name = document.getElementById('name').value;
    const error1 = document.getElementById('name_error');
    const lastName = document.getElementById('lastName').value;
    const error2 = document.getElementById('lastName_error');
    const thirdName = document.getElementById('thirdName').value;
    const error3 = document.getElementById('thirdName_error');

    error1.innerHTML = validateName(name);
    error2.innerHTML = validateName(lastName);
    error3.innerHTML = validateName(thirdName);




}

function checkAge() {
    function validateAge(date) {
        let error = "";
        let date1 = new Date(date);
        var month_diff = Date.now() - date1.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age < 18){
            error += "Вам немає ще 18 років";
        }
        return error;

    }

    const date = document.getElementById('date').value;
    console.log(date);

    const error = document.getElementById('age_error');

    error.textContent = validateAge(date);

}


