// modules/sidebar.js
import { filterByCategory } from './filters.js';

export function initSidebar() {
    const toggleBtn = document.getElementById('catalogToggleBtn');
    const closeBtn = document.getElementById('sidebarClose');
    const overlay = document.getElementById('sidebarOverlay');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSidebar);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    // Категории в сайдбаре
    document.querySelectorAll('.sidebar-category').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-category').forEach(c => c.classList.remove('active'));
            item.classList.add('active');

            const category = item.dataset.category;
            filterByCategory(category);

            // Синхронизируем с шапкой
            document.querySelectorAll('.nav-category').forEach(link => {
                const isActive = link.dataset.section === category || (category === 'all' && link.dataset.section === 'all');
                link.classList.toggle('active', isActive);
            });

            // Прокручиваем к каталогу
            setTimeout(() => {
                const grid = document.getElementById('productsGrid');
                if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);

            closeSidebar();
        });
    });
}

export function toggleSidebar() {
    const sidebar = document.getElementById('leftSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('sidebar-open');
}

export function closeSidebar() {
    const sidebar = document.getElementById('leftSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('sidebar-open');
}

export function openSidebar() {
    const sidebar = document.getElementById('leftSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const body = document.body;

    sidebar.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('sidebar-open');
}