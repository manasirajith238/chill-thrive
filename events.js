// Smooth image hover effects
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
    });

    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Card hover effects with smooth CSS transitions
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px)';
        this.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Gallery counter interaction
let galleryIndex = 0;
document.querySelectorAll('.gallery-counter').forEach(counter => {
    counter.addEventListener('click', () => {
        galleryIndex = (galleryIndex + 1) % 3;
        const firstSpan = counter.querySelector('span:first-child');
        firstSpan.textContent = galleryIndex + 1;
        
        // Smooth fade effect
        counter.style.opacity = '0.5';
        setTimeout(() => {
            counter.style.opacity = '1';
        }, 200);
    });
});

// Parallax scroll effect with requestAnimationFrame
let scrollPos = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

function updateParallax() {
    const lanoGallery = document.querySelector('.lando-gallery');
    if (lanoGallery) {
        const rect = lanoGallery.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            lanoGallery.style.transform = `translateY(${scrollPos * 0.1}px)`;
        }
    }
    ticking = false;
}