

$(document).ready(function () {
    var $table = $('#userTable');
    var $deleteButton = $('#deleteRows');
    var $duplicateButton = $('#duplicateRows');

    // Функція для додавання нового рядка до таблиці
    function addRowToTable(email, lastName, name, thirdName, date, group, phone, sex) {
        var newRow = '<tr>' +
            '<td><input type="checkbox"></td>' +
            '<td>' + email + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td>' + name + '</td>' +
            '<td>' + thirdName + '</td>' +
            '<td>' + date + '</td>' +
            '<td>' + group + '</td>' +
            '<td>' + phone + '</td>' +
            '<td>' + sex + '</td>' +
            '</tr>';
        $table.find('tbody').append(newRow);
    }

    // Функція для очищення полів форми після додавання в таблицю
    function clearFormFields() {
        $('#info')[0].reset();
    }

    // Обробник події натиснення кнопки "Зареєструватися"
    $('#info').submit(function (event) {
        event.preventDefault();
        // Отримуємо дані з полів форми
        var email = $('#email').val();
        var lastName = $('#lastName').val();
        var name = $('#name').val();
        var thirdName = $('#thirdName').val();
        var date = $('#date').val();
        var group = $('#groupNumber').val();
        var phone = $('#phone').val();
        var sex = $('input[name="sex"]:checked').val();

        // Додаємо дані до таблиці
        addRowToTable(email, lastName, name, thirdName, date, group, phone, sex);

        // Очищаємо форму
        clearFormFields();
    });

    // Обробник події видалення обраних рядків
    $deleteButton.click(function () {
        $table.find('input[type="checkbox"]:checked').each(function () {
            $(this).closest('tr').remove();
        });
    });

    // Обробник події дублювання обраних рядків
    $duplicateButton.click(function () {
        $table.find('input[type="checkbox"]:checked').each(function () {
            var $rowToDuplicate = $(this).closest('tr');
            var email = $rowToDuplicate.find('td:eq(1)').text();
            var lastName = $rowToDuplicate.find('td:eq(2)').text();
            var name = $rowToDuplicate.find('td:eq(3)').text();
            var thirdName = $rowToDuplicate.find('td:eq(4)').text();
            var date = $rowToDuplicate.find('td:eq(5)').text();
            var group = $rowToDuplicate.find('td:eq(6)').text();
            var phone = $rowToDuplicate.find('td:eq(7)').text();
            var sex = $rowToDuplicate.find('td:eq(8)').text();

            addRowToTable(email, lastName, name, thirdName, date, group, phone, sex);
        });
    });
});