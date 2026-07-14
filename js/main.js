// main.js
import { initCart } from './modules/cart.js';
import { initFilters } from './modules/filters.js';
import { initSlider } from './modules/slider.js';
import { initSidebar } from './modules/sidebar.js';
import { initModals } from './modules/modals.js';
import { initSearch } from './modules/search.js';
import { initAuth } from './modules/auth.js';
import { initChat } from './modules/chat.js';
import { initNavigation } from './modules/navigation.js';
import { initProductDetail } from './modules/productDetail.js';
import { renderCategories, renderProducts } from './modules/renderers.js';
import { filterByCategory } from './modules/filters.js';
import { showMainPage } from './modules/productDetail.js';
import { CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация корзины
    initCart();

    // 2. Рендеринг компонентов
    renderCategories();
    renderProducts('all');

    // 3. Инициализация всех модулей
    initFilters();
    initSlider();
    initSidebar();
    initModals();
    initSearch();
    initAuth();
    initChat();
    initNavigation();
    initProductDetail();

    // 4. Обработка фильтрации через события
    document.addEventListener('filterCategory', (e) => {
        filterByCategory(e.detail.category);
    });

    // 5. Обработка истории браузера
    window.addEventListener('popstate', () => {
        const detailPage = document.getElementById('productDetailPage');
        if (detailPage && detailPage.style.display === 'block') {
            showMainPage();
        }
    });

    // 6. Проверка параметра product в URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (productId) {
        import('./modules/productDetail.js').then(module => {
            module.openProductDetail(parseInt(productId));
        });
    }

    // 7. Применяем конфиг
    applyConfig();
});

function applyConfig() {
    const { company } = CONFIG;

    document.querySelectorAll('[data-phone]').forEach(el => {
        el.textContent = company.phone;
        if (el.tagName === 'A') {
            el.href = company.phoneLink;
        }
    });

    document.querySelectorAll('[data-email]').forEach(el => {
        el.textContent = company.email;
        if (el.tagName === 'A') {
            el.href = company.emailLink;
        }
    });

    document.querySelectorAll('.telegram-link').forEach(el => {
        el.href = company.telegram;
        el.textContent = company.telegramName;
    });
}