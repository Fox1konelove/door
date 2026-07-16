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
import { initInfoPages } from './modules/infoPages.js';
import { renderCategories, renderProducts } from './modules/renderers.js';
import { filterByCategory } from './modules/filters.js';
import { showMainPage } from './modules/productDetail.js';
import { showMainPageFromInfo } from './modules/infoPages.js';
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
    initInfoPages();

    // 4. Обработка фильтрации через события
    document.addEventListener('filterCategory', (e) => {
        filterByCategory(e.detail.category);
    });

    // 5. Обработка истории браузера
    window.addEventListener('popstate', (e) => {
        const state = e.state || {};
        
        if (state.page === 'product') {
            // Страница товара
            if (state.id) {
                import('./modules/productDetail.js').then(module => {
                    module.openProductDetail(state.id);
                });
            }
        } else if (state.page === 'info') {
            // Информационная страница
            if (state.section) {
                import('./modules/infoPages.js').then(module => {
                    module.openInfoPage(state.section);
                });
            }
        } else {
            // Главная страница
            showMainPageFromInfo();
            showMainPage();
            document.querySelectorAll('.nav-category').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-category[data-section="all"]')?.classList.add('active');
        }
    });

    // 6. Проверка параметров в URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    const infoSection = params.get('info');

    if (productId) {
        import('./modules/productDetail.js').then(module => {
            module.openProductDetail(parseInt(productId));
        });
    } else if (infoSection) {
        import('./modules/infoPages.js').then(module => {
            module.openInfoPage(infoSection);
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