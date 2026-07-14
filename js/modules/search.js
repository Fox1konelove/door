// modules/search.js
import { products } from '../data/products.js';
import { openModal, closeModal } from './modals.js';
import { openProductDetail } from './productDetail.js';

export function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', openSearchModal);
    }

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

export function openSearchModal() {
    openModal('searchModal');
    setTimeout(() => {
        const input = document.getElementById('searchInput');
        if (input) input.focus();
    }, 100);
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const results = products.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    const resultsDiv = document.getElementById('searchResults');
    if (!resultsDiv) return;

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p style="text-align:center; padding:40px;">Ничего не найдено</p>';
    } else {
        resultsDiv.innerHTML = results.map(p => `
            <div class="search-result-item" data-id="${p.id}">
                <div class="search-result-img"><img src="${p.image}" alt="${p.title}"></div>
                <div class="search-result-info">
                    <div class="search-result-title">${p.title}</div>
                    <div>${p.price.toLocaleString()} ₽</div>
                </div>
            </div>
        `).join('');

        resultsDiv.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const id = parseInt(el.dataset.id);
                openProductDetail(id);
                closeModal('searchModal');
            });
        });
    }
}