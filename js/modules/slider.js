// modules/slider.js
import { products } from '../data/products.js';
import { addToCartSimple } from './cart.js';
import { openProductDetail } from './productDetail.js';

export function initSlider() {
    renderSlider();
    setupSliderControls();
}

function renderSlider() {
    const track = document.getElementById('sliderTrack');
    if (!track) return;

    track.innerHTML = products.slice(0, 6).map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="product-image">
                <div class="img-note">📸 [${p.title}]</div>
            </div>
            <div class="product-info">
                <div class="product-title">${p.title}</div>
                <div class="product-material">${p.material}</div>
                <div class="product-price">${p.price.toLocaleString()} ₽</div>
                <button class="btn btn-primary" style="width:100%; margin-top:12px;" data-id="${p.id}">В корзину</button>
            </div>
        </div>
    `).join('');

    track.querySelectorAll('.product-card').forEach(card => {
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

function setupSliderControls() {
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }
}