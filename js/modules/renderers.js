// modules/renderers.js — обновлённая версия (только категории)

import { categories } from '../data/products.js';

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
            // Открываем страницу категории
            import('./categoryPages.js').then(module => {
                module.openCategoryPage(category);
            });
        });
    });
}

// ⚠️ ФУНКЦИЯ renderProducts УДАЛЕНА — больше не используется на главной