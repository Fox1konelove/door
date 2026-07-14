// modules/sidebar.js
import { filterByCategory } from './filters.js';

export function initSidebar() {
    const toggleBtn = document.getElementById('catalogToggleBtn');
    const closeBtn = document.getElementById('sidebarClose');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebar = document.getElementById('leftSidebar');

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
            filterByCategory(item.dataset.category);
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