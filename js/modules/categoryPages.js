// modules/categoryPages.js — обновлённая версия

import { products } from '../data/products.js';
import { addToCartSimple } from './cart.js';
import { openProductDetail } from './productDetail.js';

// Данные для категорий
const categoryData = {
    'Межкомнатные': {
        title: '🏠 Межкомнатные двери',
        description: 'Широкий выбор межкомнатных дверей из массива, шпона и МДФ. Идеальное решение для создания уютного интерьера.'
    },
    'Входные': {
        title: '🔒 Входные двери',
        description: 'Надёжные входные двери с усиленной конструкцией и тройной защитой. Безопасность вашего дома — наш приоритет.'
    },
    'Офисные': {
        title: '🏢 Офисные двери',
        description: 'Практичные и стильные двери для офисных помещений. Отличная звукоизоляция и износостойкость.'
    },
    'Противопожарные': {
        title: '🔥 Противопожарные двери',
        description: 'Сертифицированные противопожарные двери с огнестойкостью до 60 минут. Надёжная защита в экстренных ситуациях.'
    },
    'Раздвижные': {
        title: '↔️ Раздвижные двери',
        description: 'Экономия пространства и современный дизайн. Идеальное решение для небольших помещений и зонирования.'
    },
    'Стеклянные': {
        title: '🪟 Стеклянные двери',
        description: 'Элегантные стеклянные двери, наполняющие пространство светом. Современный и стильный выбор для вашего интерьера.'
    }
};

let currentCategory = null;
let currentSubFilter = 'all';

export function initCategoryPages() {
    // Обработка кликов на категории в шапке
    document.querySelectorAll('.nav-category:not(.info-link)').forEach(link => {
        link.addEventListener('click', () => {
            const category = link.dataset.section;
            if (category === 'all') {
                showMainPageFromCategory();
                document.querySelectorAll('.nav-category').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else {
                openCategoryPage(category);
            }
        });
    });

    // Обработка кликов на категории в сайдбаре
    document.querySelectorAll('.sidebar-category:not(.info-category)').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            if (category === 'all') {
                showMainPageFromCategory();
                document.querySelectorAll('.sidebar-category').forEach(c => c.classList.remove('active'));
                item.classList.add('active');
            } else {
                openCategoryPage(category);
            }
            const event = new CustomEvent('closeSidebar');
            document.dispatchEvent(event);
        });
    });

    // Обработка кликов на категории в футере
    document.querySelectorAll('.footer-category').forEach(link => {
        link.addEventListener('click', () => {
            const category = link.dataset.cat;
            openCategoryPage(category);
        });
    });

    // Обработка фильтров внутри категории
    document.addEventListener('click', (e) => {
        const chip = e.target.closest('.category-filter-chip');
        if (chip) {
            document.querySelectorAll('.category-filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentSubFilter = chip.dataset.filter;
            renderCategoryProducts(currentCategory, currentSubFilter);
        }
    });

    // Событие для возврата на главную из категории
    document.addEventListener('showMainFromCategory', showMainPageFromCategory);
}

export function openCategoryPage(category) {
    const data = categoryData[category];
    if (!data) return;

    currentCategory = category;
    currentSubFilter = 'all';

    // Скрываем всё
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'none';
    document.getElementById('infoPage').classList.remove('active');
    document.getElementById('infoPage').style.display = 'none';

    // Показываем страницу категории
    const page = document.getElementById('categoryPage');
    page.classList.add('active');
    page.style.display = 'block';

    // Заполняем контент
    document.getElementById('categoryBreadcrumb').textContent = data.title;
    document.getElementById('categoryPageTitle').textContent = data.title;
    document.getElementById('categoryDescription').textContent = data.description;

    renderCategoryProducts(category, 'all');

    // Обновляем активные ссылки
    document.querySelectorAll('.nav-category').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === category) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });

    history.pushState({ page: 'category', category: category }, '', `?category=${encodeURIComponent(category)}`);
    window.scrollTo(0, 0);
}

function renderCategoryProducts(category, filter) {
    const grid = document.getElementById('categoryProductsGrid');
    if (!grid) return;

    let filtered = products.filter(p => p.category === category);

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.material === filter || p.material.includes(filter));
    }

    renderCategoryFilters(filtered);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:60px 20px; color:var(--color-text-light);">
                <div style="font-size:3rem; margin-bottom:16px;">🔍</div>
                <h3>В этой категории пока нет товаров</h3>
                <p>Скоро мы добавим новые модели. Следите за обновлениями!</p>
            </div>
        `;
        updateStats(0);
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="product-image">
                <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="product-info">
                <div class="product-title">${p.title}</div>
                <div class="product-material">${p.material}</div>
                <div class="product-price">${p.price.toLocaleString()} ₽</div>
                <button class="btn btn-primary" style="width:100%; margin-top:12px;" data-id="${p.id}">В корзину</button>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                e.stopPropagation();
                addToCartSimple(parseInt(e.target.dataset.id));
            } else {
                openProductDetail(parseInt(card.dataset.id));
            }
        });
    });

    updateStats(filtered.length);
}

function renderCategoryFilters(filteredProducts) {
    const container = document.getElementById('categoryFilters');
    if (!container) return;

    const materials = [...new Set(filteredProducts.map(p => p.material))];

    if (materials.length <= 1) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <div class="category-filter-chip active" data-filter="all">Все модели</div>
        ${materials.map(m => `
            <div class="category-filter-chip" data-filter="${m}">${m}</div>
        `).join('')}
    `;
}

function updateStats(count) {
    let stats = document.querySelector('.category-stats');
    if (!stats) {
        const container = document.querySelector('.category-page .container');
        stats = document.createElement('div');
        stats.className = 'category-stats';
        container.appendChild(stats);
    }
    stats.innerHTML = `Найдено <span>${count}</span> моделей в этой категории`;
}

export function showMainPageFromCategory() {
    const page = document.getElementById('categoryPage');
    page.classList.remove('active');
    page.style.display = 'none';

    document.getElementById('mainPage').style.display = 'block';

    document.querySelectorAll('.nav-category').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('.nav-category[data-section="all"]')?.classList.add('active');

    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === 'all') {
            item.classList.add('active');
        }
    });

    history.pushState({ page: 'main' }, '', window.location.pathname);
}