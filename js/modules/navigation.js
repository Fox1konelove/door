// modules/navigation.js
import { filterByCategory } from './filters.js';
import { showMainPage } from './productDetail.js';
import { closeSidebar } from './sidebar.js';

export function initNavigation() {
    // Логотип
    document.getElementById('logoLink')?.addEventListener('click', showMainPage);

    // ===== КАТЕГОРИИ В ШАПКЕ =====
    document.querySelectorAll('.nav-category').forEach(link => {
        link.addEventListener('click', (e) => {
            // Обновляем активный класс
            document.querySelectorAll('.nav-category').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const category = link.dataset.section;
            if (category === 'all') {
                filterByCategory('all');
                // Показываем главную страницу
                showMainPage();
            } else {
                // Показываем главную и фильтруем
                showMainPage();
                setTimeout(() => {
                    filterByCategory(category);
                    // Прокручиваем к каталогу
                    const grid = document.getElementById('productsGrid');
                    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });

    // ===== НАВИГАЦИЯ ПО РАЗДЕЛАМ (услуги, доставка, контакты) =====
    document.querySelectorAll('.nav-links a:not(.nav-category)').forEach(link => {
        link.addEventListener('click', () => {
            showMainPage();
            setTimeout(() => scrollToSection(link.dataset.section), 100);
        });
    });

    // ===== КАТЕГОРИИ В ФУТЕРЕ =====
    document.querySelectorAll('.footer-category').forEach(link => {
        link.addEventListener('click', () => {
            showMainPage();
            setTimeout(() => {
                filterByCategory(link.dataset.cat);
                const grid = document.getElementById('productsGrid');
                if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    });

    // ===== КНОПКИ =====
    document.getElementById('catalogScrollBtn')?.addEventListener('click', () => {
        showMainPage();
        setTimeout(() => {
            const grid = document.getElementById('productsGrid');
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });

    document.getElementById('freeMeasureBtn')?.addEventListener('click', () => {
        showNotification('Заявка на бесплатный замер принята');
    });

    // ===== "НАЗАД" НА СТРАНИЦЕ ТОВАРА =====
    document.querySelectorAll('.back-to-main').forEach(el => {
        el.addEventListener('click', showMainPage);
    });
}

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Вспомогательная функция для уведомлений
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
        font-weight: 500;
    `;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}