// data/products.js
export const products = [
    {
        id: 1,
        title: 'Классик',
        category: 'Межкомнатные',
        material: 'Массив сосны',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=400&h=400&fit=crop',
        description: 'Элегантная классическая дверь из массива сосны с белой эмалью.',
        specs: {
            'Материал': 'Массив сосны',
            'Покрытие': 'Эмаль',
            'Толщина': '40 мм'
        }
    },
    {
        id: 2,
        title: 'Модерн',
        category: 'Межкомнатные',
        material: 'Экошпон',
        price: 8900,
        image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&h=400&fit=crop',
        description: 'Современная дверь с покрытием экошпон.',
        specs: {
            'Материал': 'Экошпон',
            'Покрытие': 'Венге',
            'Толщина': '38 мм'
        }
    },
    {
        id: 3,
        title: 'Страж',
        category: 'Входные',
        material: 'Сталь',
        price: 32900,
        image: 'https://images.unsplash.com/photo-1584621881560-2c8e9f3f4c6e?w=400&h=400&fit=crop',
        description: 'Надежная входная дверь с усиленной конструкцией.',
        specs: {
            'Материал': 'Сталь',
            'Толщина': '2 мм',
            'Замок': 'Cisa'
        }
    },
    {
        id: 4,
        title: 'Премиум',
        category: 'Входные',
        material: 'Сталь+терморазрыв',
        price: 58500,
        image: 'https://images.unsplash.com/photo-1595429638954-1a5c9d5a7a8e?w=400&h=400&fit=crop',
        description: 'Премиальная входная дверь с терморазрывом.',
        specs: {
            'Материал': 'Сталь',
            'Терморазрыв': 'Да',
            'Толщина': '3 мм'
        }
    },
    {
        id: 5,
        title: 'Венеция',
        category: 'Межкомнатные',
        material: 'Массив дуба',
        price: 24900,
        image: 'https://images.unsplash.com/photo-1506306465490-5f6b0e0b9f3e?w=400&h=400&fit=crop',
        description: 'Изысканная дверь из массива дуба с патиной.',
        specs: {
            'Материал': 'Массив дуба',
            'Покрытие': 'Патина',
            'Толщина': '42 мм'
        }
    },
    {
        id: 6,
        title: 'Лофт',
        category: 'Межкомнатные',
        material: 'Металл+стекло',
        price: 18900,
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop',
        description: 'Стильная дверь в стиле лофт с металлическим каркасом.',
        specs: {
            'Материал': 'Металл+стекло',
            'Стиль': 'Лофт',
            'Толщина': '36 мм'
        }
    },
    {
        id: 7,
        title: 'Крепость',
        category: 'Входные',
        material: 'Сталь 3мм',
        price: 45900,
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=400&fit=crop',
        description: 'Усиленная входная дверь с тремя замками.',
        specs: {
            'Материал': 'Сталь',
            'Замки': '3 шт',
            'Толщина': '3 мм'
        }
    },
    {
        id: 8,
        title: 'Офис Стандарт',
        category: 'Офисные',
        material: 'Ламинатин',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
        description: 'Практичная дверь для офисных помещений.',
        specs: {
            'Материал': 'Ламинатин',
            'Класс': 'Стандарт',
            'Толщина': '36 мм'
        }
    },
    {
        id: 9,
        title: 'Огнестойкая',
        category: 'Противопожарные',
        material: 'Сталь+огнеупор',
        price: 52000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        description: 'Противопожарная дверь с сертификатом EI60.',
        specs: {
            'Материал': 'Сталь+огнеупор',
            'Сертификат': 'EI60',
            'Толщина': '50 мм'
        }
    },
    {
        id: 10,
        title: 'Слайд',
        category: 'Раздвижные',
        material: 'Алюминий+стекло',
        price: 28900,
        image: 'https://images.unsplash.com/photo-1502005229766-939cb4a5c8e6?w=400&h=400&fit=crop',
        description: 'Раздвижная дверь-купе с алюминиевым профилем.',
        specs: {
            'Материал': 'Алюминий+стекло',
            'Тип': 'Купе',
            'Толщина': '35 мм'
        }
    },
    {
        id: 11,
        title: 'Хай-тек',
        category: 'Межкомнатные',
        material: 'Эмаль+стекло',
        price: 16900,
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&h=400&fit=crop',
        description: 'Современная дверь с матовым стеклом.',
        specs: {
            'Материал': 'Эмаль+стекло',
            'Стиль': 'Хай-тек',
            'Толщина': '40 мм'
        }
    },
    {
        id: 12,
        title: 'Прованс',
        category: 'Межкомнатные',
        material: 'Массив ясеня',
        price: 21500,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop',
        description: 'Дверь в стиле прованс с эффектом старения.',
        specs: {
            'Материал': 'Массив ясеня',
            'Стиль': 'Прованс',
            'Толщина': '40 мм'
        }
    },
    {
        id: 13,
        title: 'Бизнес',
        category: 'Офисные',
        material: 'Шпон',
        price: 11900,
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop',
        description: 'Солидная дверь для переговорных комнат.',
        specs: {
            'Материал': 'Шпон',
            'Класс': 'Бизнес',
            'Толщина': '40 мм'
        }
    },
    {
        id: 14,
        title: 'Панорама',
        category: 'Стеклянные',
        material: 'Закалённое стекло',
        price: 35900,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop',
        description: 'Полностью стеклянная дверь с матовым покрытием.',
        specs: {
            'Материал': 'Закалённое стекло',
            'Толщина': '10 мм',
            'Покрытие': 'Мат'
        }
    }
];

export const sizeOptions = [
    { name: '600×2000 мм', priceMod: 0 },
    { name: '700×2000 мм', priceMod: 500 },
    { name: '800×2000 мм', priceMod: 1000 }
];

export const colorOptions = [
    { name: 'Белый', priceMod: 0, colorCode: '#ffffff' },
    { name: 'Венге', priceMod: 0, colorCode: '#4a3728' },
    { name: 'Дуб сонома', priceMod: 800, colorCode: '#b87c4f' }
];

export const categories = [
    { name: 'Межкомнатные', icon: '🏠' },
    { name: 'Входные', icon: '🔒' },
    { name: 'Офисные', icon: '🏢' },
    { name: 'Противопожарные', icon: '🔥' },
    { name: 'Раздвижные', icon: '↔️' },
    { name: 'Стеклянные', icon: '🪟' }
];