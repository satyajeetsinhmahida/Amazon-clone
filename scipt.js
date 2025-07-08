// Welcome banner on top
window.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    const welcomeMsg = document.createElement('div');
    welcomeMsg.textContent = '👋 Welcome to our Amazon UI Clone!';
    welcomeMsg.style.backgroundColor = '#ffd814';
    welcomeMsg.style.color = '#0f1111';
    welcomeMsg.style.padding = '12px';
    welcomeMsg.style.fontSize = '18px';
    welcomeMsg.style.fontWeight = 'bold';
    welcomeMsg.style.textAlign = 'center';
    welcomeMsg.style.borderBottom = '2px solid #febd69';
    heroSection.prepend(welcomeMsg);

    // Search input interaction
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`🔍 You searched for: "${searchInput.value}"`);
        }
    });

    // Hover effects for boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            box.style.transform = 'scale(1.02)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.boxShadow = 'none';
            box.style.transform = 'scale(1)';
        });
    });

    // Clickable "See more" links
    const seeMoreTexts = document.querySelectorAll('.box-content p');
    seeMoreTexts.forEach(p => {
        p.style.cursor = 'pointer';
        p.addEventListener('click', () => {
            alert(`📦 Viewing more about: ${p.previousElementSibling.textContent}`);
        });
    });

    // Cart click example
    const cartIcon = document.querySelector('.nav-cart');
    cartIcon.addEventListener('click', () => {
        alert('🛒 Redirecting to your cart!');
    });
});
