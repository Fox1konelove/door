// modules/chat.js
export function initChat() {
    const chatBtn = document.getElementById('chatButton');
    const sendBtn = document.getElementById('chatSendBtn');
    const input = document.getElementById('chatInput');

    if (chatBtn) {
        chatBtn.addEventListener('click', toggleChat);
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
}

export function toggleChat() {
    const window = document.getElementById('chatWindow');
    const button = document.getElementById('chatButton');

    if (!window || !button) return;

    window.classList.toggle('active');
    button.classList.toggle('active');

    if (window.classList.contains('active')) {
        window.style.display = 'flex';
    } else {
        window.style.display = 'none';
    }
}

export function sendMessage() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');

    if (!input || !body) return;

    const message = input.value.trim();
    if (!message) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Сообщение пользователя
    body.innerHTML += `
        <div class="chat-message user">
            <div class="message-bubble">${escapeHtml(message)}</div>
            <div class="message-time">${time}</div>
        </div>
    `;

    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Ответ менеджера (имитация)
    setTimeout(() => {
        body.innerHTML += `
            <div class="chat-message manager">
                <div class="message-bubble">Спасибо за сообщение! Менеджер скоро ответит вам.</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}