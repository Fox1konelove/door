// modules/filters.js
import { products } from '../data/products.js';
import { renderProducts } from './renderers.js';

let currentFilter = 'all';

export function initFilters() {
    const filters = ['Все двери', 'Межкомнатные', 'Входные', 'Офисные', 'Противопожарные', 'Раздвижные', 'Стеклянные'];
    const container = document.getElementById('filtersContainer');

    if (!container) return;

    container.innerHTML = filters.map(f => `
        <div class="filter-chip ${f === 'Все двери' ? 'active' : ''}" data-filter="${f}">
            ${f}
        </div>
    `).join('');

    container.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        currentFilter = chip.dataset.filter === 'Все двери' ? 'all' : chip.dataset.filter;
        renderProducts(currentFilter);
    });
}

export function filterByCategory(category) {
    currentFilter = category === 'all' ? 'all' : category;

    // Обновляем фильтры
    document.querySelectorAll('.filter-chip').forEach(c => {
        const isActive = c.dataset.filter === category || (category === 'all' && c.dataset.filter === 'Все двери');
        c.classList.toggle('active', isActive);
    });

    renderProducts(currentFilter);
}

export function getCurrentFilter() {
    return currentFilter;
}

export function getFilteredProducts() {
    return currentFilter === 'all'
        ? products
        : products.filter(p => p.category === currentFilter);
}