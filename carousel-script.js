// Gestion du carousel
class CarouselManager {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.progressBar = document.querySelector('.progress-bar');
        this.autoPlayInterval = null;
        this.autoPlayDuration = 5000; // 5 secondes
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateSlideBackground();
        this.goToSlide(0); // S'assurer que le premier slide est actif
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        // Boutons de navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Indicateurs
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause auto-play au hover
        const carouselHero = document.querySelector('.carousel-hero');
        if (carouselHero) {
            carouselHero.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carouselHero.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Navigation clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    updateSlideBackground() {
        this.slides.forEach(slide => {
            const bgImage = slide.getAttribute('data-bg');
            if (bgImage) {
                slide.style.backgroundImage = `url(${bgImage})`;
                console.log('Background set for slide:', bgImage);
            }
        });
    }
    
    goToSlide(index) {
        // Retirer la classe active de tous les slides et indicateurs
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Ajouter la classe active au slide et indicateur courants
        this.slides[index].classList.add('active');
        this.indicators[index].classList.add('active');
        
        this.currentSlide = index;
        this.resetProgressBar();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoPlay() {
        this.pauseAutoPlay(); // S'assurer qu'il n'y a pas de conflit
        this.resetProgressBar();
        
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDuration);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        this.progressBar.style.width = '0%';
    }
    
    resetProgressBar() {
        this.progressBar.style.transition = 'none';
        this.progressBar.style.width = '0%';
        
        // Force reflow
        this.progressBar.offsetHeight;
        
        this.progressBar.style.transition = `width ${this.autoPlayDuration}ms linear`;
        this.progressBar.style.width = '100%';
    }
}

// Navigation mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Fermer le menu mobile lors du clic sur un lien
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    });
});

// Scroll fluide pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation des cartes d'accès rapide
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}, observerOptions);

// Observer les cartes d'accès rapide
document.addEventListener('DOMContentLoaded', () => {
    const quickCards = document.querySelectorAll('.quick-card');
    quickCards.forEach(card => observer.observe(card));
    
    // Initialiser le carousel
    new CarouselManager();
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    // Réajuster les éléments si nécessaire
    const carouselHero = document.querySelector('.carousel-hero');
    if (carouselHero) {
        carouselHero.style.height = '100vh';
    }
});

// Préchargement des images
function preloadImages() {
    const imageUrls = [
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
        'https://images.pexels.com/photos/162568/mining-excavator-coal-mining-wheel-162568.jpeg',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
        'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Précharger les images au chargement de la page
window.addEventListener('load', preloadImages);