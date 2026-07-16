// modules/infoPages.js
import { showMainPage } from './productDetail.js';

// Данные для информационных страниц
const infoData = {
    info: {
        title: '📖 Статьи о дверях',
        content: `
            <h2>Как выбрать идеальную дверь для вашего дома</h2>
            <p>Выбор двери — это важное решение, которое влияет на комфорт, безопасность и эстетику вашего дома. В этой статье мы расскажем о ключевых критериях выбора.</p>

            <div class="info-card">
                <h4>🔑 Основные критерии выбора</h4>
                <p>При выборе двери обратите внимание на: материал, конструкцию, звукоизоляцию, теплоизоляцию и дизайн. Каждый из этих параметров влияет на долговечность и функциональность.</p>
            </div>

            <h3>1. Материалы изготовления</h3>
            <p>Двери могут быть изготовлены из различных материалов:</p>
            <ul>
                <li><strong>Массив дерева</strong> — экологичный, премиальный вариант, но требует ухода</li>
                <li><strong>МДФ и шпон</strong> — доступная цена, широкий выбор дизайнов</li>
                <li><strong>Металлические</strong> — максимальная надёжность и безопасность</li>
                <li><strong>Стеклянные</strong> — современный дизайн, визуальное расширение пространства</li>
            </ul>

            <h3>2. Типы дверей по назначению</h3>
            <ul>
                <li><strong>Межкомнатные</strong> — для внутренних помещений, акцент на дизайн</li>
                <li><strong>Входные</strong> — усиленная конструкция, защита от взлома</li>
                <li><strong>Офисные</strong> — практичные, шумоизолирующие</li>
                <li><strong>Противопожарные</strong> — обязательны в общественных зданиях</li>
            </ul>

            <div class="info-card">
                <h4>💡 Совет эксперта</h4>
                <p>При выборе межкомнатных дверей обращайте внимание на толщину полотна — 40-45 мм считается оптимальной для звукоизоляции.</p>
            </div>

            <h3>Таблица сравнения материалов</h3>
            <table class="size-table">
                <thead>
                    <tr>
                        <th>Материал</th>
                        <th>Цена</th>
                        <th>Износостойкость</th>
                        <th>Экологичность</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Массив</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>Шпон/МДФ</td>
                        <td>⭐⭐⭐</td>
                        <td>⭐⭐⭐</td>
                        <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>Металл</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    tips: {
        title: '💡 Советы по выбору дверей',
        content: `
            <h2>Как не ошибиться при покупке двери</h2>
            <p>Мы собрали 10 главных советов, которые помогут вам сделать правильный выбор.</p>

            <div class="info-card">
                <h4>📏 1. Замер — основа основ</h4>
                <p>Всегда заказывайте профессиональный замер. Даже небольшая погрешность может привести к проблемам при монтаже. Мы предлагаем бесплатный замер!</p>
            </div>

            <div class="info-card">
                <h4>🏗️ 2. Учитывайте тип стен</h4>
                <p>Для гипсокартонных перегородок нужны лёгкие двери, для бетонных — усиленные конструкции.</p>
            </div>

            <div class="info-card">
                <h4>🎨 3. Дизайн — это важно</h4>
                <p>Дверь должна гармонировать с интерьером. Обратите внимание на цвет, фактуру и фурнитуру.</p>
            </div>

            <div class="info-card">
                <h4>🔊 4. Звукоизоляция</h4>
                <p>Для спальни и детской выбирайте двери с повышенной звукоизоляцией (от 30 дБ).</p>
            </div>

            <div class="info-card">
                <h4>📦 5. Комплектация</h4>
                <p>Проверьте, что в комплект входят: полотно, коробка, наличники, фурнитура. Некоторые производители продают их отдельно.</p>
            </div>

            <h3>📋 Чек-лист перед покупкой</h3>
            <ul>
                <li>✅ Определиться с бюджетом</li>
                <li>✅ Выбрать материал и конструкцию</li>
                <li>✅ Сделать точный замер</li>
                <li>✅ Сравнить цены у разных производителей</li>
                <li>✅ Проверить сертификаты качества</li>
                <li>✅ Уточнить условия гарантии</li>
            </ul>

            <div class="info-card" style="border-color: var(--color-primary);">
                <h4>🚀 Бесплатная консультация</h4>
                <p>Наши менеджеры помогут подобрать идеальную дверь под ваш бюджет и интерьер. Просто нажмите на кнопку чата в правом нижнем углу!</p>
            </div>
        `
    },
    faq: {
        title: '❓ Часто задаваемые вопросы',
        content: `
            <h2>Ответы на популярные вопросы</h2>

            <div class="faq-item active">
                <div class="faq-question">Какие сроки изготовления дверей?</div>
                <div class="faq-answer">
                    <p>Стандартные модели — 3-5 дней. Эксклюзивные двери по индивидуальному заказу — от 14 до 30 дней.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Предоставляете ли вы гарантию?</div>
                <div class="faq-answer">
                    <p>Да, мы даём гарантию 10 лет на все двери и монтажные работы. Также мы предоставляем сервисное обслуживание.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Есть ли бесплатная доставка?</div>
                <div class="faq-answer">
                    <p>Да, по Москве и области доставка бесплатная при заказе от 30 000 ₽. Также подъём на этаж — бесплатно.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Какой материал лучше — массив или шпон?</div>
                <div class="faq-answer">
                    <p>Массив — дороже и экологичнее, требует ухода. Шпон — доступнее, устойчивее к перепадам влажности. Выбор зависит от вашего бюджета и условий эксплуатации.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Можно ли установить дверь самостоятельно?</div>
                <div class="faq-answer">
                    <p>Рекомендуем доверять монтаж профессионалам. Неправильная установка может снизить срок службы двери. Мы выполняем установку качественно и с гарантией.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Какие варианты оплаты доступны?</div>
                <div class="faq-answer">
                    <p>Мы принимаем наличные, банковские карты, безналичный расчёт для юридических лиц. Также возможна рассрочка.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">Есть ли у вас образцы в шоу-руме?</div>
                <div class="faq-answer">
                    <p>Да, наш выставочный зал находится по адресу: г. Москва, ул. Строителей, 15. Ждём вас с 9:00 до 20:00.</p>
                </div>
            </div>
        `
    }
};

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

    // Аккордеон для FAQ
    document.addEventListener('click', (e) => {
        const question = e.target.closest('.faq-question');
        if (question) {
            const item = question.closest('.faq-item');
            if (item) {
                item.classList.toggle('active');
            }
        }
    });
}

export function openInfoPage(section) {
    const data = infoData[section];
    if (!data) return;

    // Скрываем всё
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'none';

    // Скрываем страницу категории, если она открыта
    const categoryPage = document.getElementById('categoryPage');
    if (categoryPage) {
        categoryPage.classList.remove('active');
        categoryPage.style.display = 'none';
    }

    // Показываем страницу информации
    const page = document.getElementById('infoPage');
    page.classList.add('active');
    page.style.display = 'block';

    // Заполняем контент
    document.getElementById('infoBreadcrumb').textContent = data.title;
    document.getElementById('infoPageTitle').textContent = data.title;
    document.getElementById('infoContent').innerHTML = data.content;

    window.scrollTo(0, 0);

    // Обновляем активную ссылку в шапке
    document.querySelectorAll('.nav-category').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('.nav-category.info-link').forEach(link => {
        if (link.dataset.section === section) {
            link.classList.add('active');
        }
    });

    // Обновляем сайдбар
    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === section && item.classList.contains('info-category')) {
            item.classList.add('active');
        }
    });

    // Обновляем историю
    history.pushState({ page: 'info', section: section }, '', `?info=${section}`);
}

export function showMainPageFromInfo() {
    // 1. Скрываем страницу информации
    document.getElementById('infoPage').classList.remove('active');
    document.getElementById('infoPage').style.display = 'none';

    // 2. Скрываем страницу категории (если она открыта)
    const categoryPage = document.getElementById('categoryPage');
    if (categoryPage) {
        categoryPage.classList.remove('active');
        categoryPage.style.display = 'none';
    }

    // 3. Показываем главную страницу
    document.getElementById('mainPage').style.display = 'block';

    // 4. Убираем активность с информационных ссылок
    document.querySelectorAll('.nav-category.info-link').forEach(link => {
        link.classList.remove('active');
    });

    // 5. Убираем активность с категорий дверей
    document.querySelectorAll('.nav-category:not(.info-link)').forEach(link => {
        link.classList.remove('active');
    });

    // 6. Активируем "Все двери"
    document.querySelector('.nav-category[data-section="all"]')?.classList.add('active');

    // 7. Сбрасываем активность в сайдбаре
    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === 'all') {
            item.classList.add('active');
        }
    });
}