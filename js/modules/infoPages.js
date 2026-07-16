// modules/infoPages.js
import { infoArticles, openInfoModal } from './infoModal.js';

// Группировка статей по типам
const articlesList = Object.values(infoArticles).filter(a => a.type === 'article');
const tipsList = Object.values(infoArticles).filter(a => a.type === 'tip');

export function initInfoPages() {
    // Обработка кликов на информационные ссылки в шапке
    document.querySelectorAll('.nav-category.info-link').forEach(link => {
        link.addEventListener('click', () => {
            const section = link.dataset.section;
            openInfoPage(section);
        });
    });

    // Обработка кликов в боковом меню
    document.querySelectorAll('.sidebar-category.info-category').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.category;
            openInfoPage(section);
            const event = new CustomEvent('closeSidebar');
            document.dispatchEvent(event);
        });
    });

    // Обработка кликов в футере
    document.querySelectorAll('.footer-info').forEach(link => {
        link.addEventListener('click', () => {
            const section = link.dataset.section;
            openInfoPage(section);
        });
    });
}

export function openInfoPage(section) {
    let title = '';
    let items = [];
    let subtitle = '';

    if (section === 'info') {
        title = '📖 Статьи о дверях';
        subtitle = 'Полезная информация о выборе, установке и уходе за дверями';
        items = articlesList;
    } else if (section === 'tips') {
        title = '💡 Советы по выбору дверей';
        subtitle = 'Практические рекомендации от наших экспертов';
        items = tipsList;
    } else if (section === 'faq') {
        // FAQ пока оставляем как есть
        openFaqPage();
        return;
    } else {
        return;
    }

    // Скрываем всё
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'none';
    const categoryPage = document.getElementById('categoryPage');
    if (categoryPage) {
        categoryPage.classList.remove('active');
        categoryPage.style.display = 'none';
    }

    // Показываем страницу информации
    const page = document.getElementById('infoPage');
    page.classList.add('active');
    page.style.display = 'block';

    // Заполняем контент с карточками
    document.getElementById('infoBreadcrumb').textContent = title;
    document.getElementById('infoPageTitle').textContent = title;

    const content = document.getElementById('infoContent');
    content.innerHTML = `
        <p class="info-section-subtitle">${subtitle}</p>
        <div class="info-grid" id="infoGrid">
            ${items.map(item => `
                <div class="info-card-item" data-id="${item.id}">
                    <div class="card-image">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-tag">${item.tag}</span>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-excerpt">${item.excerpt}</p>
                        <div class="card-meta">
                            <span>📅 ${item.date}</span>
                            <span>⏱️ ${item.readTime}</span>
                            <span class="read-more">Читать →</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Обработка кликов по карточкам
    document.querySelectorAll('.info-card-item').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            openInfoModal(id);
        });
    });

    window.scrollTo(0, 0);

    // Обновляем активные ссылки
    document.querySelectorAll('.nav-category').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('.nav-category.info-link').forEach(link => {
        if (link.dataset.section === section) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === section && item.classList.contains('info-category')) {
            item.classList.add('active');
        }
    });

    history.pushState({ page: 'info', section: section }, '', `?info=${section}`);
}

// Страница FAQ (оставляем как есть)
function openFaqPage() {
    // Скрываем всё
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'none';
    const categoryPage = document.getElementById('categoryPage');
    if (categoryPage) {
        categoryPage.classList.remove('active');
        categoryPage.style.display = 'none';
    }

    const page = document.getElementById('infoPage');
    page.classList.add('active');
    page.style.display = 'block';

    document.getElementById('infoBreadcrumb').textContent = '❓ Часто задаваемые вопросы';
    document.getElementById('infoPageTitle').textContent = '❓ Часто задаваемые вопросы';

    document.getElementById('infoContent').innerHTML = `
        <div class="faq-container">
            <div class="faq-item active">
                <div class="faq-question">Какие сроки изготовления дверей?</div>
                <div class="faq-answer"><p>Стандартные модели — 3-5 дней. Эксклюзивные двери по индивидуальному заказу — от 14 до 30 дней.</p></div>
            </div>
            <div class="faq-item">
                <div class="faq-question">Предоставляете ли вы гарантию?</div>
                <div class="faq-answer"><p>Да, мы даём гарантию 10 лет на все двери и монтажные работы.</p></div>
            </div>
            <div class="faq-item">
                <div class="faq-question">Есть ли бесплатная доставка?</div>
                <div class="faq-answer"><p>Да, по Москве и области доставка бесплатная при заказе от 30 000 ₽.</p></div>
            </div>
            <div class="faq-item">
                <div class="faq-question">Какой материал лучше — массив или шпон?</div>
                <div class="faq-answer"><p>Массив — дороже и экологичнее. Шпон — доступнее и устойчивее к влажности.</p></div>
            </div>
            <div class="faq-item">
                <div class="faq-question">Можно ли установить дверь самостоятельно?</div>
                <div class="faq-answer"><p>Рекомендуем доверять монтаж профессионалам. Мы выполняем установку качественно и с гарантией.</p></div>
            </div>
        </div>
    `;

    // Аккордеон для FAQ
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            if (item) item.classList.toggle('active');
        });
    });

    window.scrollTo(0, 0);

    // Обновляем активные ссылки
    document.querySelectorAll('.nav-category').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('.nav-category.info-link').forEach(link => {
        if (link.dataset.section === 'faq') {
            link.classList.add('active');
        }
    });

    history.pushState({ page: 'info', section: 'faq' }, '', '?info=faq');
}

export function showMainPageFromInfo() {
    document.getElementById('infoPage').classList.remove('active');
    document.getElementById('infoPage').style.display = 'none';

    const categoryPage = document.getElementById('categoryPage');
    if (categoryPage) {
        categoryPage.classList.remove('active');
        categoryPage.style.display = 'none';
    }

    document.getElementById('mainPage').style.display = 'block';

    document.querySelectorAll('.nav-category.info-link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.nav-category:not(.info-link)').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelector('.nav-category[data-section="all"]')?.classList.add('active');

    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === 'all') {
            item.classList.add('active');
        }
    });
}