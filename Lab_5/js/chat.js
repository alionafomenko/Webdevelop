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
