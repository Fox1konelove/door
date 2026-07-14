// modules/productDetail.js
import { products, sizeOptions, colorOptions } from '../data/products.js';
import { addToCart } from './cart.js';

let currentProduct = null;
let selectedSize = sizeOptions[0];
let selectedColor = colorOptions[0];

export function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    selectedSize = sizeOptions[0];
    selectedColor = colorOptions[0];

    // Заполняем данные
    document.getElementById('breadcrumbCategory').textContent = product.category;
    document.getElementById('breadcrumbTitle').textContent = product.title;
    document.getElementById('detailTitle').textContent = product.title;
    document.getElementById('detailDescription').textContent = product.description;
    document.getElementById('detailMainImg').src = product.image;
    document.getElementById('detailMainImg').alt = product.title;

    // Характеристики
    const specsTable = document.getElementById('detailSpecs');
    specsTable.innerHTML = Object.entries(product.specs).map(([k, v]) => `
        <tr><td>${k}</td><td>${v}</td></tr>
    `).join('');

    // Миниатюры (пока одна)
    document.getElementById('detailThumbnails').innerHTML = `
        <div class="thumbnail active">
            <img src="${product.image}" alt="${product.title}">
        </div>
    `;

    // Размеры
    renderSizeOptions();
    renderColorOptions();
    updateDetailPriceAndSku();

    // Показать страницу товара
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'block';
    window.scrollTo(0, 0);
    history.pushState({ page: 'product', id: productId }, '', `?product=${productId}`);
}

function renderSizeOptions() {
    const container = document.getElementById('detailSizeOptions');
    container.innerHTML = sizeOptions.map((s, i) => `
        <button class="size-btn ${i === 0 ? 'active' : ''}" data-size-index="${i}">
            ${s.name}
        </button>
    `).join('');

    container.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = sizeOptions[parseInt(btn.dataset.sizeIndex)];
            updateDetailPriceAndSku();
        });
    });
}

function renderColorOptions() {
    const container = document.getElementById('detailColorOptions');
    container.innerHTML = colorOptions.map((c, i) => `
        <button class="color-btn ${i === 0 ? 'active' : ''}" data-color-index="${i}">
            <span class="color-dot" style="background:${c.colorCode};"></span>
            ${c.name}${c.priceMod > 0 ? ` (+${c.priceMod}₽)` : ''}
        </button>
    `).join('');

    container.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedColor = colorOptions[parseInt(btn.dataset.colorIndex)];
            updateDetailPriceAndSku();
        });
    });
}

function updateDetailPriceAndSku() {
    if (!currentProduct) return;
    const total = currentProduct.price + selectedSize.priceMod + selectedColor.priceMod;

    document.getElementById('detailCurrentPrice').textContent = total.toLocaleString() + ' ₽';

    if (selectedSize.priceMod > 0 || selectedColor.priceMod > 0) {
        document.getElementById('detailOldPrice').style.display = 'inline';
        document.getElementById('detailOldPrice').textContent = currentProduct.price.toLocaleString() + ' ₽';
    } else {
        document.getElementById('detailOldPrice').style.display = 'none';
    }

    document.getElementById('detailSku').textContent =
        `Артикул: ${currentProduct.title.substring(0,2)}-${selectedSize.name.substring(0,2)}-${selectedColor.name.substring(0,2)}`;
}

export function initProductDetail() {
    // Кнопка "Добавить в корзину" на странице товара
    document.getElementById('detailAddToCartBtn')?.addEventListener('click', () => {
        if (!currentProduct) return;
        const totalPrice = currentProduct.price + selectedSize.priceMod + selectedColor.priceMod;
        addToCart(currentProduct.id, selectedSize.name, selectedColor.name);
    });

    // Вкладки
    document.querySelectorAll('#productDetailPage .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#productDetailPage .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('#productDetailPage .tab-content').forEach(t => t.style.display = 'none');
            document.getElementById(btn.dataset.tab + 'Tab').style.display = 'block';
        });
    });
}

export function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('productDetailPage').style.display = 'none';
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
    history.pushState({ page: 'main' }, '', window.location.pathname);
}

