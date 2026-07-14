// modules/navigation.js
import { filterByCategory } from './filters.js';
import { showMainPage } from './productDetail.js';

export function initNavigation() {
    // Логотип
    document.getElementById('logoLink')?.addEventListener('click', showMainPage);

    // Навигация в шапке
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => scrollToSection(link.dataset.section));
    });

    // Навигация в футере
    document.querySelectorAll('.footer-nav').forEach(link => {
        link.addEventListener('click', () => scrollToSection(link.dataset.section));
    });

    // Категории в футере
    document.querySelectorAll('.footer-category').forEach(link => {
        link.addEventListener('click', () => filterByCategory(link.dataset.cat));
    });

    // Кнопка "Выбрать дверь" в Hero
    document.getElementById('catalogScrollBtn')?.addEventListener('click', scrollToCatalog);

    // Кнопка "Бесплатный замер"
    document.getElementById('freeMeasureBtn')?.addEventListener('click', () => {
        showNotification('Заявка на бесплатный замер принята');
    });

    // "Назад" на странице товара
    document.querySelectorAll('.back-to-main').forEach(el => {
        el.addEventListener('click', showMainPage);
    });

    // Кнопка "Каталог" в Hero
    document.getElementById('catalogScrollBtn')?.addEventListener('click', scrollToCatalog);
}

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export function scrollToCatalog() {
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Вспомогательная функция для уведомлений (зависимость)
function showNotification(msg) {
    const n = document.createElement('div');
    n.textContent = msg;
    n.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--color-primary, #1a4a3f);
        color: white;
        padding: 12px 24px;
        border-radius: 60px;
        z-index: 10000;
        animation: slideUp 0.3s;
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}