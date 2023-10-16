// dayOfWeek.js

function calculateDayOfWeek() {
    const dateStr = document.getElementById('birthdate').value;
    const date = new Date(dateStr);

    if (!isNaN(date)) {
        const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
        const dayOfWeek = daysOfWeek[date.getDay()];

        document.getElementById('day-of-week').textContent = `День тижня: ${dayOfWeek}`;
    } else {
        alert('Будь ласка, введіть коректну дату.');
    }
}
