// rectangle.js

function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (!isNaN(length) && !isNaN(width)) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        const diagonal = Math.sqrt(length ** 2 + width ** 2);

        document.getElementById('perimeter').textContent = `Периметр: ${perimeter}`;
        document.getElementById('area').textContent = `Площа: ${area}`;
        document.getElementById('diagonal').textContent = `Довжина діагоналі: ${diagonal}`;
    } else {
        alert('Будь ласка, введіть числові значення для довжини та ширини.');
    }
}
