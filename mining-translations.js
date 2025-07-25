// Système de traductions pour la page Carrés Miniers
const miningTranslations = {
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
        
        // Page Carrés Miniers
        miningSquares: {
            title: "CARRÉS MINIERS",
            subtitle: "Découvrez nos zones d'exploitation minière à travers la République Démocratique du Congo, avec des concessions stratégiquement positionnées dans les régions les plus riches en minerais.",
            backButton: "← Retour à l'accueil",
            
            // Statuts
            status: {
                active: "Actif",
                development: "En développement",
                planning: "En planification"
            },
            
            // Sites miniers
            sites: {
                hautKatanga: {
                    name: "Haut-Katanga",
                    location: "Province du Haut-Katanga, RDC",
                    minerals: "Minerais Exploités"
                },
                lualaba: {
                    name: "Lualaba",
                    location: "Province du Lualaba, RDC",
                    minerals: "Minerais Exploités"
                },
                ituri: {
                    name: "Ituri",
                    location: "Province de l'Ituri, RDC",
                    minerals: "Minerais Exploités"
                },
                maniema: {
                    name: "Maniema",
                    location: "Province du Maniema, RDC",
                    minerals: "Minerais Prévus"
                },
                nordKivu: {
                    name: "Nord-Kivu",
                    location: "Province du Nord-Kivu, RDC",
                    minerals: "Minerais Prévus"
                },
                newConcessions: {
                    name: "Nouvelles Concessions",
                    location: "Diverses provinces, RDC",
                    minerals: "Minerais Ciblés"
                }
            },
            
            // Détails des sites
            details: {
                production: "Production",
                employees: "Employés",
                area: "Superficie",
                startYear: "Année de début",
                plannedProduction: "Production prévue",
                plannedJobs: "Emplois prévus",
                plannedLaunch: "Lancement prévu",
                investment: "Investissement",
                studyPhase: "Phase d'étude",
                horizon: "Horizon"
            },
            
            // Types de minerais
            minerals: {
                copper: "Cuivre",
                cobalt: "Cobalt",
                gold: "Or",
                coltan: "Coltan",
                lithium: "Lithium",
                graphite: "Graphite"
            }
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
        
        // Mining Squares Page
        miningSquares: {
            title: "MINING SQUARES",
            subtitle: "Discover our mining areas across the Democratic Republic of Congo, with concessions strategically positioned in the richest mineral regions.",
            backButton: "← Back to home",
            
            // Status
            status: {
                active: "Active",
                development: "In development",
                planning: "In planning"
            },
            
            // Mining sites
            sites: {
                hautKatanga: {
                    name: "Haut-Katanga",
                    location: "Haut-Katanga Province, DRC",
                    minerals: "Mined Minerals"
                },
                lualaba: {
                    name: "Lualaba",
                    location: "Lualaba Province, DRC",
                    minerals: "Mined Minerals"
                },
                ituri: {
                    name: "Ituri",
                    location: "Ituri Province, DRC",
                    minerals: "Mined Minerals"
                },
                maniema: {
                    name: "Maniema",
                    location: "Maniema Province, DRC",
                    minerals: "Planned Minerals"
                },
                nordKivu: {
                    name: "Nord-Kivu",
                    location: "Nord-Kivu Province, DRC",
                    minerals: "Planned Minerals"
                },
                newConcessions: {
                    name: "New Concessions",
                    location: "Various provinces, DRC",
                    minerals: "Target Minerals"
                }
            },
            
            // Site details
            details: {
                production: "Production",
                employees: "Employees",
                area: "Area",
                startYear: "Start year",
                plannedProduction: "Planned production",
                plannedJobs: "Planned jobs",
                plannedLaunch: "Planned launch",
                investment: "Investment",
                studyPhase: "Study phase",
                horizon: "Horizon"
            },
            
            // Mineral types
            minerals: {
                copper: "Copper",
                cobalt: "Cobalt",
                gold: "Gold",
                coltan: "Coltan",
                lithium: "Lithium",
                graphite: "Graphite"
            }
        },
        
        // Footer
        footer: {
            rights: "All rights reserved."
        }
    }
};

// Langue par défaut pour la page carrés miniers
let currentMiningLanguage = 'fr';

// Fonction pour changer la langue sur la page carrés miniers
function changeMiningLanguage(lang) {
    if (!miningTranslations[lang]) {
        console.error(`Language ${lang} not supported for mining page`);
        return;
    }
    
    currentMiningLanguage = lang;
    updateMiningContent();
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour les boutons de langue
    updateMiningLanguageButtons();
}

// Fonction pour obtenir une traduction pour la page carrés miniers
function getMiningTranslation(key) {
    const keys = key.split('.');
    let value = miningTranslations[currentMiningLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Mining translation key not found: ${key} for language: ${currentMiningLanguage}`);
            return key; // Retourne la clé si la traduction n'existe pas
        }
    }
    
    return value;
}

// Fonction pour mettre à jour le contenu de la page carrés miniers
function updateMiningContent() {
    // Mettre à jour les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getMiningTranslation(key);
        
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
function updateMiningLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === currentMiningLanguage);
    });
}

// Initialisation au chargement de la page carrés miniers
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer la langue préférée du localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && miningTranslations[savedLanguage]) {
        currentMiningLanguage = savedLanguage;
    }
    
    // Mettre à jour le contenu initial
    updateMiningContent();
    
    // Ajouter les événements pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                changeMiningLanguage(lang);
            }
        });
    });
});

// Exporter les fonctions pour utilisation globale
window.changeMiningLanguage = changeMiningLanguage;
window.getMiningTranslation = getMiningTranslation;