// modules/auth.js
import { openModal, closeModal } from './modals.js';
import { showNotification } from './notifications.js';

let isLoginMode = true;

export function initAuth() {
    const accountBtn = document.getElementById('accountBtn');
    if (accountBtn) {
        accountBtn.addEventListener('click', openAccountModal);
    }
}

export function openAccountModal() {
    renderAuthForm();
    openModal('accountModal');
}

function renderAuthForm() {
    const container = document.getElementById('authContainer');
    if (!container) return;

    if (isLoginMode) {
        container.innerHTML = `
            <form class="auth-form" id="loginForm">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Пароль" required>
                <button type="submit" class="btn btn-primary">Войти</button>
                <div class="auth-switch">
                    Нет аккаунта? <a id="switchToRegister">Зарегистрироваться</a>
                </div>
            </form>
        `;

        const form = document.getElementById('loginForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Добро пожаловать!');
            closeModal('accountModal');
        });

        document.getElementById('switchToRegister').addEventListener('click', () => {
            isLoginMode = false;
            renderAuthForm();
        });
    } else {
        container.innerHTML = `
            <form class="auth-form" id="registerForm">
                <input type="text" placeholder="Имя" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Пароль (мин. 6 символов)" required>
                <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                <div class="auth-switch">
                    Уже есть аккаунт? <a id="switchToLogin">Войти</a>
                </div>
            </form>
        `;

        const form = document.getElementById('registerForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Регистрация успешна!');
            isLoginMode = true;
            renderAuthForm();
        });

        document.getElementById('switchToLogin').addEventListener('click', () => {
            isLoginMode = true;
            renderAuthForm();
        });
    }
}