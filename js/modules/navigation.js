// modules/navigation.js
import { filterByCategory } from './filters.js';
import { showMainPage } from './productDetail.js';
import { openInfoPage, showMainPageFromInfo } from './infoPages.js';
import { openCategoryPage, showMainPageFromCategory } from './categoryPages.js';
import { closeSidebar } from './sidebar.js';

export function initNavigation() {
    // ===== ЛОГОТИП =====
    document.getElementById('logoLink')?.addEventListener('click', () => {
        showMainPageFromInfo();
        showMainPageFromCategory();
        showMainPage();
        document.querySelectorAll('.nav-category').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('.nav-category[data-section="all"]')?.classList.add('active');
    });

    // ===== КНОПКА "НАЗАД" НА СТРАНИЦЕ ТОВАРА =====
    document.querySelectorAll('.back-to-main').forEach(el => {
        el.addEventListener('click', () => {
            showMainPageFromInfo();
            showMainPageFromCategory();
            showMainPage();
        });
    });

    // ===== КНОПКИ =====
    document.getElementById('catalogScrollBtn')?.addEventListener('click', () => {
        showMainPageFromInfo();
        showMainPageFromCategory();
        showMainPage();
        setTimeout(() => {
            const grid = document.getElementById('productsGrid');
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });

    document.getElementById('freeMeasureBtn')?.addEventListener('click', () => {
        showNotification('Заявка на бесплатный замер принята');
    });

    // ===== УСЛУГИ, ДОСТАВКА, КОНТАКТЫ =====
    document.querySelectorAll('.nav-links a:not(.nav-category)').forEach(link => {
        link.addEventListener('click', () => {
            showMainPageFromInfo();
            showMainPageFromCategory();
            showMainPage();
            setTimeout(() => scrollToSection(link.dataset.section), 100);
        });
    });
}

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

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