// modules/renderers.js
import { products, categories } from '../data/products.js';
import { addToCartSimple } from './cart.js';
import { openProductDetail } from './productDetail.js';

export function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    const prices = {
        'Межкомнатные': '5 900',
        'Входные': '24 900',
        'Офисные': '6 500',
        'Противопожарные': '45 000',
        'Раздвижные': '22 000',
        'Стеклянные': '28 000'
    };

    grid.innerHTML = categories.map(c => `
        <div class="category-card" data-cat="${c.name}">
            <div class="category-image">
                <div class="img-note">📸 [ФОТО: ${c.name}]</div>
            </div>
            <h3>${c.icon} ${c.name}</h3>
            <p>От ${prices[c.name] || '10 000'} ₽</p>
        </div>
    `).join('');

    grid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.cat;
            import('./categoryPages.js').then(module => {
                module.openCategoryPage(category);
            });
        });
    });
}

// ===== ДОБАВЛЯЕМ ЭКСПОРТ renderProducts (если нужен) =====
export function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);

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
}