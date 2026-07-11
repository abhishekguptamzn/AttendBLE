// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function () {
    lucide.createIcons();
});

// Click skill tags to highlight
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function () {
        this.classList.toggle('tag-active');
    });
});

// Dynamic style for active tag
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .tag-active {
        background: linear-gradient(135deg, #0891b2, #0e7490) !important;
        border-color: #0891b2 !important;
        color: #fff !important;
        transform: scale(1.05);
        box-shadow: 0 4px 12px -2px rgba(8, 145, 178, 0.4);
    }
`;
document.head.appendChild(activeStyle);

// Timeline cards — scroll-triggered entrance
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.12}s`;
    observer.observe(item);
});

// Console branding
console.log(
    '%c✦ Abhishek Gupta — Salesforce Team Lead Resume',
    'background: linear-gradient(135deg, #0891b2, #0e7490); color: #fff; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600;'
);
