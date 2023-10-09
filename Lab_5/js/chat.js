// chat.js

function sendMessage(sender) {

    const chatArea = document.getElementById('chat_area');
    const message = document.getElementById('message_'+sender).value;
    const messageLine = document.createElement('div');
    const messageElement = document.createElement('div');
    if (message.trim() !== '') {
        messageElement.textContent = message;
        messageElement.classList.add('message_' +sender)
        messageLine.classList.add('classLine_' +sender);
        messageLine.appendChild(messageElement);
        chatArea.appendChild(messageLine);
        document.getElementById('message_'+sender).value = '';
        chatArea.scrollTo(0, chatArea.scrollHeight);
    }


}
/*function sendMessage() {
    const message = document.getElementById('message_1').value;
    const chatArea = document.getElementById('chat_area_1');
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatArea.classList.add('vasya-class');
        chatArea.appendChild(messageElement);
        document.getElementById('message_1').value = '';
    }
}


function sendMessage_2() {
    const message = document.getElementById('message_2').value;
    const chatArea = document.getElementById('chat_area_1');
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatArea.classList.add('petya-class');
        chatArea.appendChild(messageElement);
        document.getElementById('message_2').value = '';
    }
}*/
