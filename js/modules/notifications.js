// modules/notifications.js
export function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--color-primary, #1a4a3f);
        color: white;
        padding: 14px 28px;
        border-radius: 60px;
        z-index: 10000;
        animation: slideUp 0.3s ease;
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        font-weight: 500;
        max-width: 90%;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}