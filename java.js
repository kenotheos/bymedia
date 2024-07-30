const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.style.transform = 'translateY(-10px) scale(1.05)';
        service.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    service.addEventListener('mouseleave', () => {
        service.style.transform = 'translateY(0) scale(1)';
        service.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});