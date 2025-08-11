// Système de traductions pour la page carousel
const carouselTranslations = {
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            activities: "Activités",
            miningSquares: "Carrés Miniers",
            projects: "Projets",
            sustainability: "Développement Durable",
            partnerships: "Partenariats",
            contact: "Contact"
        },
        
        // Carousel Slides
        carousel: {
            slide1: {
                title: "KAZHAYES MINING SARL",
                subtitle: "Leader de l'extraction minière en RDC",
                description: "Depuis 2005, nous excellons dans l'exploration et l'exploitation de mines de cuivre, cobalt, or et diamant en République Démocratique du Congo.",
                discover: "Découvrir notre histoire",
                contact: "Nous contacter",
                years: "Années d'expérience",
                sites: "Sites actifs",
                employees: "Employés"
            },
            slide2: {
                title: "NOS ACTIVITÉS",
                subtitle: "De l'exploration à l'exportation",
                description: "Notre expertise couvre toute la chaîne de valeur minière : exploration géologique, exploitation responsable, transformation moderne et exportation internationale.",
                explore: "Explorer nos activités",
                sites: "Voir nos sites",
                exploration: "Exploration",
                exploitation: "Exploitation",
                transformation: "Transformation",
                exportation: "Exportation"
            },
            slide3: {
                title: "NOS MINERAIS",
                subtitle: "Richesses du sous-sol congolais",
                description: "Nous exploitons les minerais les plus précieux de la RDC : cuivre pour l'industrie, cobalt pour les batteries, or pour la finance et diamant pour le luxe.",
                statistics: "Voir les statistiques",
                projects: "Nos projets",
                copper: "Cuivre",
                cobalt: "Cobalt",
                gold: "Or"
            },
            slide4: {
                title: "DÉVELOPPEMENT DURABLE",
                subtitle: "Exploitation responsable et durable",
                description: "Nous nous engageons pour une exploitation minière respectueuse de l'environnement et bénéfique aux communautés locales, avec des programmes de formation et d'infrastructure.",
                learn: "En savoir plus",
                partnerships: "Nos partenariats",
                environment: "Protection Environnementale",
                environmentDesc: "Réduction des émissions et économie circulaire",
                community: "Impact Social",
                communityDesc: "Formation et développement des communautés"
            }
        },
        
        // Quick Access Section
        quickAccess: {
            title: "ACCÈS RAPIDE",
            about: "À Propos",
            aboutDesc: "Découvrez notre histoire et nos valeurs",
            sites: "Carrés Miniers",
            sitesDesc: "Explorez nos sites d'exploitation",
            info: "Informations Officielles",
            infoDesc: "Données et statistiques officielles",
            contact: "Contact",
            contactDesc: "Entrez en contact avec nous"
        },
        
        // Footer
        footer: {
            rights: "Tous droits réservés."
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            activities: "Activities",
            miningSquares: "Mining Squares",
            projects: "Projects",
            sustainability: "Sustainable Development",
            partnerships: "Partnerships",
            contact: "Contact"
        },
        
        // Carousel Slides
        carousel: {
            slide1: {
                title: "KAZHAYES MINING SARL",
                subtitle: "Leading mining extraction in DRC",
                description: "Since 2005, we excel in exploration and mining of copper, cobalt, gold and diamond mines in the Democratic Republic of Congo.",
                discover: "Discover our history",
                contact: "Contact us",
                years: "Years of experience",
                sites: "Active sites",
                employees: "Employees"
            },
            slide2: {
                title: "OUR ACTIVITIES",
                subtitle: "From exploration to export",
                description: "Our expertise covers the entire mining value chain: geological exploration, responsible exploitation, modern transformation and international export.",
                explore: "Explore our activities",
                sites: "View our sites",
                exploration: "Exploration",
                exploitation: "Exploitation",
                transformation: "Transformation",
                exportation: "Export"
            },
            slide3: {
                title: "OUR MINERALS",
                subtitle: "Riches of the Congolese subsoil",
                description: "We exploit the most precious minerals of the DRC: copper for industry, cobalt for batteries, gold for finance and diamond for luxury.",
                statistics: "View statistics",
                projects: "Our projects",
                copper: "Copper",
                cobalt: "Cobalt",
                gold: "Gold"
            },
            slide4: {
                title: "SUSTAINABLE DEVELOPMENT",
                subtitle: "Responsible and sustainable exploitation",
                description: "We are committed to environmentally friendly mining that benefits local communities, with training and infrastructure programs.",
                learn: "Learn more",
                partnerships: "Our partnerships",
                environment: "Environmental Protection",
                environmentDesc: "Emission reduction and circular economy",
                community: "Social Impact",
                communityDesc: "Training and community development"
            }
        },
        
        // Quick Access Section
        quickAccess: {
            title: "QUICK ACCESS",
            about: "About",
            aboutDesc: "Discover our history and values",
            sites: "Mining Squares",
            sitesDesc: "Explore our mining sites",
            info: "Official Information",
            infoDesc: "Official data and statistics",
            contact: "Contact",
            contactDesc: "Get in touch with us"
        },
        
        // Footer
        footer: {
            rights: "All rights reserved."
        }
    }
};

// Langue par défaut pour le carousel
let currentCarouselLanguage = 'fr';

// Fonction pour changer la langue du carousel
function changeCarouselLanguage(lang) {
    if (!carouselTranslations[lang]) {
        console.error(`Language ${lang} not supported for carousel`);
        return;
    }
    
    currentCarouselLanguage = lang;
    updateCarouselContent();
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour les boutons de langue
    updateCarouselLanguageButtons();
}

// Fonction pour obtenir une traduction du carousel
function getCarouselTranslation(key) {
    const keys = key.split('.');
    let value = carouselTranslations[currentCarouselLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Carousel translation key not found: ${key} for language: ${currentCarouselLanguage}`);
            return key; // Retourne la clé si la traduction n'existe pas
        }
    }
    
    return value;
}

// Fonction pour mettre à jour le contenu du carousel
function updateCarouselContent() {
    // Mettre à jour les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getCarouselTranslation(key);
        
        if (typeof translation === 'string') {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Fonction pour mettre à jour les boutons de langue
function updateCarouselLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === currentCarouselLanguage);
    });
}

// Initialisation au chargement de la page carousel
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer la langue préférée du localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && carouselTranslations[savedLanguage]) {
        currentCarouselLanguage = savedLanguage;
    }
    
    // Mettre à jour le contenu initial
    updateCarouselContent();
    
    // Ajouter les événements pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                changeCarouselLanguage(lang);
            }
        });
    });
});

// Exporter les fonctions pour utilisation globale
window.changeCarouselLanguage = changeCarouselLanguage;
window.getCarouselTranslation = getCarouselTranslation;