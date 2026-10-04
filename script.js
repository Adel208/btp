// Configuration GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation de chargement initial
window.addEventListener('DOMContentLoaded', () => {
    // Animation des éléments de fond
    gsap.fromTo('.floating-shape', 
        { opacity: 0, scale: 0 },
        { 
            opacity: 0.1, 
            scale: 1, 
            duration: 1, 
            stagger: 0.2, 
            ease: 'back.out(1.7)' 
        }
    );

    // Animation du badge
    gsap.fromTo('.hero-badge',
        { opacity: 0, y: -20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
    );

    // Animation du titre hero
    gsap.timeline()
        .to('.title-line', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        })
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.hero-stats', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2')
        .to('.hero-buttons', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2');

    // Animation des cartes flottantes
    gsap.fromTo('.hero-card',
        { opacity: 0, scale: 0, rotation: 180 },
        { 
            opacity: 1, 
            scale: 1, 
            rotation: 0, 
            duration: 0.8, 
            stagger: 0.1, 
            ease: 'back.out(1.7)' 
        }
    );

    // Animation de l'image principale
    gsap.fromTo('.image-container',
        { opacity: 0, scale: 0.5, rotation: -180 },
        { 
            opacity: 1, 
            scale: 1, 
            rotation: 0, 
            duration: 1, 
            ease: 'back.out(1.7)' 
        }
    );

    // Animation des éléments interactifs
    gsap.fromTo('.hero-interactive',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.5, ease: 'power2.out' }
    );

    // Initialisation des éléments
    gsap.set('.title-line', { opacity: 0, y: 50 });
    gsap.set('.hero-description', { opacity: 0, y: 30 });
    gsap.set('.hero-stats', { opacity: 0, y: 30 });
    gsap.set('.hero-buttons', { opacity: 0, y: 30 });
    gsap.set('.hero-card', { opacity: 0, scale: 0, rotation: 180 });
    gsap.set('.image-container', { opacity: 0, scale: 0.5, rotation: -180 });
    gsap.set('.hero-badge', { opacity: 0, y: -20, scale: 0.8 });
    gsap.set('.floating-shape', { opacity: 0, scale: 0 });
    gsap.set('.hero-interactive', { opacity: 0, y: 30 });
});

// Défilement fluide vers une section, sous la barre de navigation (70px).
// Natif : le plugin ScrollToPlugin de GSAP n'est pas chargé sur la page.
function scrollToSection(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
}

// Navigation interactive
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect sur la navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Animation des barres du menu hamburger
    if (navToggle.classList.contains('active')) {
        gsap.to('.bar:nth-child(1)', { rotation: 45, y: 8, duration: 0.3 });
        gsap.to('.bar:nth-child(2)', { opacity: 0, duration: 0.3 });
        gsap.to('.bar:nth-child(3)', { rotation: -45, y: -8, duration: 0.3 });
    } else {
        gsap.to('.bar', { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
    }
});

// Fermer le menu mobile lors du clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        gsap.to('.bar', { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
    });
});

// Smooth scroll pour les liens de navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(link.getAttribute('href'));
    });
});

// Boutons « Nos Projets » et « Devis Gratuit »
document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', () => scrollToSection(button.dataset.target));
});

// Animations au scroll avec ScrollTrigger
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.fromTo(card, 
        {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Animation des cartes de projets
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            rotationY: index % 2 === 0 ? -15 : 15
        },
        {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Animation des statistiques
// Compteur qui garde le suffixe du texte d'origine (« 500+ » reste « 500+ »)
function counterTween(number, vars) {
    const text = number.textContent.trim();
    const finalNumber = parseInt(text, 10);
    const suffix = text.replace(/^\d+/, '');
    const counter = { value: 0 };
    number.textContent = `0${suffix}`;
    return gsap.to(counter, {
        value: finalNumber,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => { number.textContent = `${Math.round(counter.value)}${suffix}`; },
        ...vars
    });
}

gsap.utils.toArray('.stat').forEach((stat, index) => {
    counterTween(stat.querySelector('h3'), {
        scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animation des éléments de contact
gsap.utils.toArray('.contact-item').forEach((item, index) => {
    gsap.fromTo(item,
        {
            opacity: 0,
            x: -30,
            scale: 0.9
        },
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Animation du formulaire de contact
gsap.fromTo('.contact-form',
    {
        opacity: 0,
        x: 50,
        scale: 0.95
    },
    {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// Animation des sections
gsap.utils.toArray('section').forEach((section, index) => {
    if (index === 0) return; // Skip hero section
    const header = section.querySelector('.section-header');
    if (!header) return; // La section À propos n'a pas d'en-tête

    gsap.fromTo(header,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Effet parallax sur l'image hero
gsap.to('.hero-visual', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Animation des boutons au hover
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Interactions des cartes hero
document.querySelectorAll('.hero-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.15,
            rotation: 10,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
});

// Animation des statistiques hero
gsap.utils.toArray('.stat-item').forEach((stat, index) => {
    counterTween(stat.querySelector('.stat-number'), { delay: 1 + (index * 0.2) });
});

// Animation des liens sociaux
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.2,
            rotation: 10,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
});

// Animation du scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    scrollToSection('#services');
});

// Animation des cartes au hover
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Animation des liens de navigation au hover
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.1,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
});

// Animation du scroll indicator
gsap.to('.scroll-indicator', {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.hero',
        start: 'bottom center',
        toggleActions: 'play none none reverse'
    }
});

// Animation des icônes de service
gsap.utils.toArray('.service-icon').forEach((icon, index) => {
    gsap.fromTo(icon,
        {
            scale: 0,
            rotation: 180
        },
        {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: icon,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Animation des images de projets
gsap.utils.toArray('.project-image').forEach((image, index) => {
    gsap.fromTo(image,
        {
            scale: 1.2,
            opacity: 0.7
        },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: image,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Animation du footer
gsap.fromTo('.footer',
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    }
);

// Animation des éléments du footer
gsap.utils.toArray('.footer-section').forEach((section, index) => {
    gsap.fromTo(section,
        {
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animation de soumission
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                submitBtn.textContent = 'Message Envoyé !';
                submitBtn.style.background = '#48bb78';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    contactForm.reset();
                }, 2000);
            }
        });
    });
}

// Animation de révélation progressive des éléments
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe loading
document.querySelectorAll('.loading').forEach(el => {
    observer.observe(el);
});

// Performance optimization - Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.resume();
    }
});

// Animation de chargement de la page
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Initialiser l'opacité du body à 0 pour l'animation de chargement
gsap.set('body', { opacity: 0 });

// Animation des particules flottantes (effet décoratif)
function createFloatingParticles() {
    const particles = [];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.3;
            z-index: 1;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Animation flottante
        gsap.to(particle, {
            y: 'random(-100, 100)',
            x: 'random(-50, 50)',
            duration: 'random(3, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2
        });
    }
}

// Créer les particules après le chargement
setTimeout(createFloatingParticles, 1000);

console.log('🚧 BTP Pro - Site web chargé avec succès !');
