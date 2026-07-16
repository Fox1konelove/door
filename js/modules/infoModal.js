// modules/infoModal.js

// Данные для статей и советов (с картинками)
export const infoArticles = {
    // ===== СТАТЬИ =====
    'article-1': {
        id: 'article-1',
        type: 'article',
        tag: '📖 Статья',
        title: 'Как выбрать идеальную дверь для вашего дома',
        excerpt: 'Выбор двери — это важное решение, которое влияет на комфорт, безопасность и эстетику вашего дома.',
        image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&h=400&fit=crop',
        date: '15 марта 2025',
        readTime: '5 мин',
        content: `
            <p>Выбор двери — это важное решение, которое влияет на комфорт, безопасность и эстетику вашего дома. В этой статье мы расскажем о ключевых критериях выбора.</p>

            <div class="highlight-box">
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

            <div class="highlight-box">
                <h4>💡 Совет эксперта</h4>
                <p>При выборе межкомнатных дверей обращайте внимание на толщину полотна — 40-45 мм считается оптимальной для звукоизоляции.</p>
            </div>
        `
    },
    'article-2': {
        id: 'article-2',
        type: 'article',
        tag: '📖 Статья',
        title: 'Тренды в дизайне дверей 2025',
        excerpt: 'Узнайте о самых актуальных трендах в дизайне межкомнатных и входных дверей в этом году.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop',
        date: '10 марта 2025',
        readTime: '4 мин',
        content: `
            <p>В 2025 году дизайн дверей становится всё более разнообразным. Вот главные тренды, которые стоит учитывать при выборе.</p>

            <h3>1. Натуральные материалы</h3>
            <p>Массив дерева и натуральный шпон остаются в топе. Особенно популярны светлые породы: ясень, дуб, орех.</p>

            <h3>2. Минимализм</h3>
            <p>Лаконичные формы, скрытые петли, отсутствие лишнего декора — всё это в тренде.</p>

            <h3>3. Стеклянные вставки</h3>
            <p>Матовое и тонированное стекло добавляет лёгкости и визуально расширяет пространство.</p>

            <h3>4. Цветовые решения</h3>
            <p>Классический белый, графитовый, венге, а также пастельные оттенки — бежевый, пудровый, мятный.</p>
        `
    },
    'article-3': {
        id: 'article-3',
        type: 'article',
        tag: '📖 Статья',
        title: 'Как ухаживать за дверями из массива',
        excerpt: 'Правильный уход продлит срок службы ваших дверей. Делимся проверенными советами.',
        image: 'https://images.unsplash.com/photo-1506306465490-5f6b0e0b9f3e?w=600&h=400&fit=crop',
        date: '5 марта 2025',
        readTime: '3 мин',
        content: `
            <p>Двери из массива дерева — это инвестиция в красоту и уют вашего дома. Чтобы они служили долго, важно правильно за ними ухаживать.</p>

            <h3>1. Регулярная очистка</h3>
            <p>Протирайте двери мягкой сухой тканью раз в неделю. Для удаления загрязнений используйте слегка влажную ткань, затем вытирайте насухо.</p>

            <h3>2. Защита от влаги</h3>
            <p>Избегайте попадания воды на деревянные поверхности. Используйте специальные восковые составы для защиты.</p>

            <h3>3. Обновление покрытия</h3>
            <p>Раз в 2-3 года обновляйте лаковое или масляное покрытие. Это защитит дерево от выцветания и царапин.</p>
        `
    },

    // ===== СОВЕТЫ =====
    'tip-1': {
        id: 'tip-1',
        type: 'tip',
        tag: '💡 Совет',
        title: 'Как не ошибиться с размером двери',
        excerpt: 'Правильный замер — залог успешной установки. Рассказываем, как измерить дверной проём.',
        image: 'https://images.unsplash.com/photo-1584621881560-2c8e9f3f4c6e?w=600&h=400&fit=crop',
        date: '12 марта 2025',
        readTime: '2 мин',
        content: `
            <p>Ошибка в замере — самая частая проблема при покупке дверей. Вот как правильно измерить проём.</p>

            <div class="highlight-box">
                <h4>📏 Что нужно измерить:</h4>
                <ul>
                    <li><strong>Ширина</strong> — в трёх точках: сверху, посередине, снизу</li>
                    <li><strong>Высота</strong> — с левой и правой стороны</li>
                    <li><strong>Толщина стены</strong> — для подбора коробки</li>
                </ul>
            </div>

            <p>Всегда заказывайте профессиональный замер. Даже небольшая погрешность может привести к проблемам при монтаже. Мы предлагаем <strong>бесплатный замер</strong>!</p>
        `
    },
    'tip-2': {
        id: 'tip-2',
        type: 'tip',
        tag: '💡 Совет',
        title: 'Какая звукоизоляция нужна для двери',
        excerpt: 'Рассказываем, на что обратить внимание, чтобы в комнате было тихо и уютно.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop',
        date: '8 марта 2025',
        readTime: '3 мин',
        content: `
            <p>Звукоизоляция двери — важный параметр, особенно для спальни, детской или кабинета.</p>

            <h3>1. Материал полотна</h3>
            <p>Массив дерева и МДФ обеспечивают лучшую звукоизоляцию. Пустотелые двери пропускают больше звука.</p>

            <h3>2. Уплотнители</h3>
            <p>Качественные резиновые или магнитные уплотнители по периметру двери значительно снижают шум.</p>

            <h3>3. Толщина</h3>
            <p>Оптимальная толщина полотна для хорошей звукоизоляции — от 40 мм.</p>
        `
    },
    'tip-3': {
        id: 'tip-3',
        type: 'tip',
        tag: '💡 Совет',
        title: 'Как выбрать фурнитуру для двери',
        excerpt: 'Ручки, петли, замки — важные элементы, которые влияют на удобство и безопасность.',
        image: 'https://images.unsplash.com/photo-1584621881560-2c8e9f3f4c6e?w=600&h=400&fit=crop',
        date: '3 марта 2025',
        readTime: '2 мин',
        content: `
            <p>Качественная фурнитура делает дверь удобной и надёжной. На что обратить внимание?</p>

            <ul>
                <li><strong>Ручки</strong> — выбирайте из латуни, стали или алюминия. Они долговечны и устойчивы к коррозии.</li>
                <li><strong>Петли</strong> — регулируемые петли позволяют точно отрегулировать положение двери.</li>
                <li><strong>Замки</strong> — для входных дверей выбирайте замки с несколькими точками запирания.</li>
            </ul>

            <div class="highlight-box">
                <h4>🔑 Совет профессионала</h4>
                <p>Не экономьте на фурнитуре — от неё зависит безопасность и срок службы двери. Мы используем только проверенные бренды.</p>
            </div>
        `
    }
};

// Функция для открытия модального окна со статьёй
export function openInfoModal(articleId) {
    const article = infoArticles[articleId];
    if (!article) return;

    // Проверяем, существует ли модальное окно
    let modal = document.getElementById('infoModal');
    if (!modal) {
        modal = createModal();
    }

    // Заполняем контент
    document.getElementById('modalImage').src = article.image;
    document.getElementById('modalImage').alt = article.title;
    document.getElementById('modalTag').textContent = article.tag;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalDate').textContent = `📅 ${article.date}`;
    document.getElementById('modalReadTime').textContent = `⏱️ ${article.readTime}`;
    document.getElementById('modalText').innerHTML = article.content;

    // Показываем модалку
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Создание модального окна (если его нет в HTML)
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'infoModal';
    modal.className = 'info-modal';
    modal.innerHTML = `
        <div class="info-modal-content">
            <button class="info-modal-close" id="infoModalClose">&times;</button>
            <div class="info-modal-body">
                <div class="modal-image">
                    <img src="" alt="" id="modalImage">
                </div>
                <span class="modal-tag" id="modalTag"></span>
                <h2 id="modalTitle"></h2>
                <div class="modal-meta">
                    <span id="modalDate">📅 </span>
                    <span id="modalReadTime">⏱️ </span>
                </div>
                <div class="modal-text" id="modalText"></div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Закрытие по крестику
    modal.querySelector('#infoModalClose').addEventListener('click', closeInfoModal);

    // Закрытие по клику на фон
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeInfoModal();
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeInfoModal();
    });

    return modal;
}

// Закрытие модалки
export function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}