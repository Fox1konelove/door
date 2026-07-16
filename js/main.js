// main.js — обновлённая версия

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
import { initInfoPages, openInfoPage } from './modules/infoPages.js';
import { initCategoryPages, openCategoryPage, getCategoryFromURL, showMainPageFromCategory } from './modules/categoryPages.js';
import { renderCategories } from './modules/renderers.js';
// ⚠️ УБИРАЕМ renderProducts — он больше не нужен на главной
import { showMainPage } from './modules/productDetail.js';
import { showMainPageFromInfo } from './modules/infoPages.js';
import { CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация корзины
    initCart();

    // 2. Рендеринг компонентов (только категории и слайдер)
    renderCategories();
    // ⚠️ УБИРАЕМ renderProducts('all') — товары только на страницах категорий
    initSlider();

    // 3. Инициализация всех модулей
    // ⚠️ УБИРАЕМ initFilters() — фильтры больше не нужны на главной
    initSidebar();
    initModals();
    initSearch();
    initAuth();
    initChat();
    initNavigation();
    initProductDetail();
    initInfoPages();
    initCategoryPages();

    // 4. Обработка истории браузера
    window.addEventListener('popstate', (e) => {
        const state = e.state || {};

        // Закрываем все страницы
        document.getElementById('mainPage').style.display = 'none';
        document.getElementById('productDetailPage').style.display = 'none';
        document.getElementById('infoPage').classList.remove('active');
        document.getElementById('infoPage').style.display = 'none';
        document.getElementById('categoryPage').classList.remove('active');
        document.getElementById('categoryPage').style.display = 'none';

        if (state.page === 'product' && state.id) {
            import('./modules/productDetail.js').then(module => {
                module.openProductDetail(state.id);
            });
        } else if (state.page === 'info' && state.section) {
            import('./modules/infoPages.js').then(module => {
                module.openInfoPage(state.section);
            });
        } else if (state.page === 'category' && state.category) {
            import('./modules/categoryPages.js').then(module => {
                module.openCategoryPage(state.category);
            });
        } else {
            // Главная страница
            showMainPageFromInfo();
            showMainPageFromCategory();
            showMainPage();
            document.querySelectorAll('.nav-category').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-category[data-section="all"]')?.classList.add('active');
        }
    });

    // 5. Проверка параметров в URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    const infoSection = params.get('info');
    const categoryParam = params.get('category');

    if (productId) {
        import('./modules/productDetail.js').then(module => {
            module.openProductDetail(parseInt(productId));
        });
    } else if (infoSection) {
        import('./modules/infoPages.js').then(module => {
            module.openInfoPage(infoSection);
        });
    } else if (categoryParam) {
        import('./modules/categoryPages.js').then(module => {
            module.openCategoryPage(decodeURIComponent(categoryParam));
        });
    }

    // 6. Применяем конфиг
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