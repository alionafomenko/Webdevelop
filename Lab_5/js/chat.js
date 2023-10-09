// chat.js

function sendMessage() {
    const message = document.getElementById('message_1').value;
    const chatBox = document.getElementById('chat-box_1');

    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        document.getElementById('message_1').value = '';
    }
}
