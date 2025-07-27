// Navigation mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Animation des statistiques
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Observer pour déclencher les animations au scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animation des cartes
            if (entry.target.classList.contains('about-card') ||
                entry.target.classList.contains('activity-card') ||
                entry.target.classList.contains('mineral-card') ||
                entry.target.classList.contains('sustainability-card') ||
                entry.target.classList.contains('partnership-card')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }

            // Animation des statistiques
            if (entry.target.classList.contains('project-stat')) {
                const numberElement = entry.target.querySelector('.stat-number');
                const target = parseInt(numberElement.getAttribute('data-target'));
                animateCounter(numberElement, target);
            }
        }
    });
}, observerOptions);

// Observer tous les éléments animables
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .activity-card, .mineral-card, .project-stat, .sustainability-card, .partnership-card, .square-card');
    animatedElements.forEach(el => observer.observe(el));
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

// Effet parallax léger pour le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animation des minerais au hover
document.querySelectorAll('.mineral-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.mineral-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.mineral-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animation de soumission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulation d'envoi (remplacer par une vraie logique d'envoi)
        setTimeout(() => {
            submitBtn.textContent = 'Message envoyé !';
            submitBtn.style.background = '#28a745';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                this.reset();
            }, 2000);
        }, 1000);
    });
}

// Animation d'apparition progressive des sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Effet de typing pour le titre principal
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Démarrer l'effet de typing quand la page est chargée
window.addEventListener('load', () => {
    const mainTitle = document.querySelector('.title-main');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        setTimeout(() => {
            typeWriter(mainTitle, originalText, 80);
        }, 500);
    }
});

// Animation des particules en arrière-plan
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255, 107, 53, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'particleFloat 15s linear infinite';
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 15000);
}

// Créer des particules périodiquement
setInterval(createParticle, 2000);

// Gestion du panneau d'informations
document.addEventListener('DOMContentLoaded', () => {
    const infoToggle = document.getElementById('infoToggle');
    const infoPanelContent = document.getElementById('infoPanelContent');
    
    if (infoToggle && infoPanelContent) {
        infoToggle.addEventListener('click', () => {
            infoPanelContent.classList.toggle('active');
            
            // Changer l'icône du bouton
            if (infoPanelContent.classList.contains('active')) {
                infoToggle.textContent = '✕';
            } else {
                infoToggle.textContent = '📊';
            }
        });
    }
});

// Ajouter l'animation CSS pour les particules
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
// Gestion du panneau d'informations
document.addEventListener('DOMContentLoaded', () => {
    const infoToggle = document.getElementById('infoToggle');
    const infoPanelContent = document.getElementById('infoPanelContent');
    
    if (infoToggle && infoPanelContent) {
        infoToggle.addEventListener('click', () => {
            infoPanelContent.classList.toggle('active');
            
            // Changer l'icône du bouton
            if (infoPanelContent.classList.contains('active')) {
                infoToggle.textContent = '✕';
            } else {
                infoToggle.textContent = '📊';
            }
        });
        
        // Fermer le panneau en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            const infoPanel = document.querySelector('.hero-info-panel');
            if (infoPanel && !infoPanel.contains(e.target)) {
                infoPanelContent.classList.remove('active');
                infoToggle.textContent = '📊';
            }
        });
    }
});