// Système de traductions multilingue
const translations = {
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            activities: "Activités",
            miningSquares: "Carrés Miniers",
            minerals: "Minerais",
            projects: "Projets",
            gallery: "Galerie",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            title: "KAZHAYES MINING SARL",
            subtitle: "Les mines en République Démocratique du Congo",
            description: "Une société minière leader en République Démocratique du Congo, qui regroupe les activités de prospections et d’exploitations de mines dans le monde entier. Elle concerne l’extraction des minéraux, de terres rares et des métaux dont le cuivre, le fer, l’or et le diamant.",
            discover: "Découvrir",
            contactUs: "Nous contacter"
        },
        // About Section
        about: {
            title: "À PROPOS DE NOUS",
            history: {
                title: "L'historique",
                description: "KAZHAYES MINING SARL a été fondée en 2005. Elle constitue une part significative de l'économie nationale en République Démocratique du Congo."
            },
            mission: {
                title: "La mission",
                description: "Elle consiste à extraire des matériaux et minéraux géologiques précieux enfouis profondément sous la surface de la Terre."
            },
            values: {
                title: "Les valeurs",
                description: "Nous assurons la sécurité et le confort de nos travailleurs exposés à des conditions environnementales difficiles."
            }
        },
        // Activities Section
        activities: {
            title: "LES ACTIVITÉS",
            exploration: {
                title: "Exploration",
                description: "Processus visant à découvrir la présence de minéraux rentables dans une zone donnée."
            },
            exploitation: {
                title: "Exploitation",
                description: "Extraire des minerais des roches de la croûte terrestre contenant des minéraux ou des métaux utiles en proportion suffisamment intéressante."
            },
            transformation: {
                title: "Transformation",
                description: "Exploitation des dernières avancées technologiques de l'industrie afin d'optimiser les processus et les résultats commerciaux."
            },
            exportation: {
                title: "Exportation",
                description: "Les produits finis offrent de formidables opportunités aux entreprises désireuses de développer leur activité à l'international."
            }
        },
        // Mining Squares Section
        miningSquares: {
            title: "CARRÉS MINIERS",
            description: "Découvrez nos zones d'exploitation minière à travers la République Démocratique du Congo, avec des concessions stratégiquement positionnées dans les régions les plus riches en minerais.",
            mapTitle: "Carte de la RDC - Zones d'Exploitation",
            legend: {
                copper: "Cuivre/Cobalt",
                gold: "Or",
                coltan: "Coltan"
            },
            status: {
                active: "Actif",
                development: "En développement",
                planning: "En planification"
            },
            details: {
                mainMineral: "Minerai principal:",
                minerals: "Minerais:",
                production: "Production:",
                employees: "Employés:",
                area: "Superficie:",
                expectedProduction: "Production prévue:",
                expectedJobs: "Emplois prévus:",
                investment: "Investissement:",
                launch: "Lancement:"
            }
        },
        // Minerals Section
        minerals: {
            title: "LES MINERAIS",
            subtitle: "Ressources exploitées",
            copper: {
                title: "Cuivre",
                uses: "Énergie, Assemblage, Informatique",
                location: "Haut-Katanga, Lualaba"
            },
            cobalt: {
                title: "Cobalt",
                uses: "Échantillonnage, Mélange, Permanent",
                location: "Lualaba"
            },
            gold: {
                title: "Or",
                uses: "Bijoux, Apport, Informatique",
                location: "Ituri, Maniema"
            },
            coltan: {
                title: "Coltan",
                uses: "Capacité, Informatique centrale",
                location: "Nord-Kivu, Maniema"
            },
            uses: "Utilisations:",
            location: "Localisation:"
        },
        // Projects Section
        projects: {
            title: "LES PROJETS",
            description: "KAZHAYES MINING SARL se focalise sur l'extraction des matériaux et minéraux, favorisant l'économie mondiale et assurant une exploitation maximale.",
            investment: "Investissement",
            investmentDesc: "Investissement prévu pour la modernisation de nos infrastructures de traitement.",
            jobsCreated: "Emplois Créés",
            jobsDesc: "Création d'emplois locaux directs et indirects grâce à nos nouvelles opérations.",
            newProjects: "Nouveaux Projets",
            newProjectsDesc: "Lancement de deux nouvelles concessions d'exploration axées sur le lithium et le graphite."
        },
        // Gallery Section
        sustainability: {
            title: "DÉVELOPPEMENT DURABLE",
            environmental: {
                title: "Protection environnementale",
                items: [
                    "Compenser ses émissions de gaz à effet de serre",
                    "Limiter le recours aux produits chimiques",
                    "Favoriser l'économie circulaire"
                ]
            },
            social: {
                title: "Impact social",
                items: [
                    "Programme de formation professionnelle et d'éducation pour les communautés locales",
                    "Développement d'infrastructures (écoles, cliniques, routes)",
                    "Promotion de l'emploi local et de l'équité des sexes"
                ]
            }
        },
        // Partnerships Section
        partnerships: {
            title: "PARTENARIATS",
            strategic: {
                title: "Partenariats Stratégiques",
                description: "Un partenariat pour la production et la distribution de minerais."
            },
            investment: {
                title: "Opportunités d'Investissement",
                description: "Nous construisons nos solutions d'investissement dans une perspective de rendement à long terme, avec conviction et responsabilité."
            },
            innovation: {
                title: "Innovation et Technologie",
                items: ["L'automatisation", "La numérisation", "L'électrification"],
                description: "Nous sommes réceptifs à toutes propositions d'améliorations qui nous guideraient au sommet de la supériorité."
            }
        },
        // Contact Section
        contact: {
            title: "CONTACTEZ-NOUS",
            info: "Informations de contact",
            address: "Adresse",
            addressValue: "République Démocratique du Congo",
            email: "Email",
            phone: "Téléphone",
            form: {
                name: "Nom complet",
                email: "Email",
                subject: "Sujet",
                message: "Message",
                send: "Envoyer le message",
                sending: "Envoi en cours...",
                sent: "Message envoyé !"
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
            minerals: "Minerals",
            projects: "Projects",
            gallery: "Gallery",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            title: "KAZHAYES MINING SARL",
            subtitle: "Natural mining in the Democratic Republic of Congo",
            description: "A leader mining company in DRC, it operates worldwide in prospecting and mining operations. It extracts minerals, rare earths, and metals including copper, iron, cobalt, gold and diamond.",
            discover: "Discover",
            contactUs: "Contact Us"
        },
        // About Section
        about: {
            title: "ABOUT US",
            history: {
                title: "History",
                description: "KAZHAYES MINING SARL was founded in 2015. It constitutes a significant part of the national economy in the DRC."
            },
            mission: {
                title: "Mission",
                description: "It consists of extracting precious geological materials and minerals buried deep beneath the Earth's surface.The objectives are to promote the systematic development of various mines with a view to harnessing the nation’s mineral wealth."
            },
            values: {
                title: "Values",
                description: "We ensure the safety and comfort of our workers exposed to difficult environmental conditions."
            }
        },
        // Activities Section
        activities: {
            title: "ACTIVITIES",
            exploration: {
                title: "Exploration",
                description: "Process aimed at discovering the presence of profitable minerals in a given area."
            },
            exploitation: {
                title: "Exploitation",
                description: "Extract minerals from rocks in the Earth's crust containing minerals or metals useful in sufficiently interesting proportions to justify their exploitation"
            },
            transformation: {
                title: "Transformation",
                description: "Exploitation of the latest technological advances in the industry to optimize processes and business results."
            },
            exportation: {
                title: "Exportation",
                description: "Finished products offer tremendous opportunities for companies wishing to develop their business internationally."
            }
        },
        // Mining Squares Section
        miningSquares: {
            title: "MINING SQUARES",
            description: "Discover our mining areas across the Democratic Republic of Congo, with concessions strategically positioned in the richest mineral regions.",
            mapTitle: "DRC Map - Exploitation Zones",
            legend: {
                copper: "Copper/Cobalt",
                gold: "Gold",
                coltan: "Coltan"
            },
            status: {
                active: "Active",
                development: "In Development",
                planning: "In Planning"
            },
            details: {
                mainMineral: "Main mineral:",
                minerals: "Minerals:",
                production: "Production:",
                employees: "Employees:",
                area: "Area:",
                expectedProduction: "Expected production:",
                expectedJobs: "Expected jobs:",
                investment: "Investment:",
                launch: "Launch:"
            }
        },
        // Minerals Section
        minerals: {
            title: "MINERALS",
            subtitle: "Exploited resources",
            copper: {
                title: "Copper",
                uses: "Energy, Assembly, Computing",
                location: "Haut-Katanga, Lualaba"
            },
            cobalt: {
                title: "Cobalt",
                uses: "Sampling, Mixing, Permanent",
                location: "Lualaba"
            },
            gold: {
                title: "Gold",
                uses: "Jewelry, Contribution, Computing",
                location: "Ituri, Maniema"
            },
            coltan: {
                title: "Coltan",
                uses: "Capacity, Central Computing",
                location: "Nord-Kivu, Maniema"
            },
            uses: "Uses:",
            location: "Location:"
        },
        // Projects Section
        projects: {
            title: "PROJECTS",
            description: "KAZHAYES MINING SARL focuses on the extraction of materials and minerals, promoting the global economy and ensuring maximum exploitation.",
            investment: "Investment",
            investmentDesc: "Planned investment for modernizing our processing infrastructure.",
            jobsCreated: "Jobs Created",
            jobsDesc: "Creation of direct and indirect local jobs through our new operations.",
            newProjects: "New Projects",
            newProjectsDesc: "Launch of two new exploration concessions focused on lithium and graphite."
        },
        // Gallery Section
        sustainability: {
            title: "SUSTAINABLE DEVELOPMENT",
            environmental: {
                title: "Environmental protection",
                items: [
                    "Offset greenhouse gas emissions",
                    "Limit the use of chemicals",
                    "Promote circular economy"
                ]
            },
            social: {
                title: "Social impact",
                items: [
                    "Professional training and education program for local communities",
                    "Infrastructure development (schools, clinics, roads)",
                    "Promotion of local employment and gender equity"
                ]
            }
        },
        // Partnerships Section
        partnerships: {
            title: "PARTNERSHIPS",
            strategic: {
                title: "Strategic Partnerships",
                description: "A partnership for the production and distribution of minerals."
            },
            investment: {
                title: "Investment Opportunities",
                description: "We build our investment solutions with a long-term return perspective, with conviction and responsibility."
            },
            innovation: {
                title: "Innovation and Technology",
                items: ["Automation", "Digitization", "Electrification"],
                description: "We are receptive to all improvement proposals that would guide us to the summit of superiority."
            }
        },
        // Contact Section
        contact: {
            title: "CONTACT US",
            info: "Contact information",
            address: "Address",
            addressValue: "Democratic Republic of Congo",
            email: "Email",
            phone: "Phone",
            form: {
                name: "Full name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send message",
                sending: "Sending...",
                sent: "Message sent!"
            }
        },
        // Footer
        footer: {
            rights: "All rights reserved."
        }
    }
};

// Langue par défaut
let currentLanguage = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    localStorage.setItem('preferredLanguage', lang);
}

// Fonction pour obtenir une traduction
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return key; // Retourne la clé si la traduction n'existe pas
        }
    }
    
    return value;
}

// Fonction pour mettre à jour le contenu
function updateContent() {
    // Navigation
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = t(key);
        
        if (typeof translation === 'string') {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Mise à jour des listes
    updateLists();
    
    // Mise à jour du sélecteur de langue
    updateLanguageSelector();
}

// Fonction pour mettre à jour les listes
function updateLists() {
    // Sustainability lists
    const envList = document.querySelector('[data-list="sustainability.environmental.items"]');
    if (envList) {
        envList.innerHTML = '';
        t('sustainability.environmental.items').forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            envList.appendChild(li);
        });
    }

    const socialList = document.querySelector('[data-list="sustainability.social.items"]');
    if (socialList) {
        socialList.innerHTML = '';
        t('sustainability.social.items').forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            socialList.appendChild(li);
        });
    }

    // Partnership innovation list
    const innovationList = document.querySelector('[data-list="partnerships.innovation.items"]');
    if (innovationList) {
        innovationList.innerHTML = '';
        t('partnerships.innovation.items').forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            innovationList.appendChild(li);
        });
    }
}

// Fonction pour mettre à jour le sélecteur de langue
function updateLanguageSelector() {
    const frBtn = document.querySelector('.lang-btn[data-lang="fr"]');
    const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    
    if (frBtn && enBtn) {
        frBtn.classList.toggle('active', currentLanguage === 'fr');
        enBtn.classList.toggle('active', currentLanguage === 'en');
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer la langue préférée du localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Mettre à jour le contenu
    updateContent();
    
    // Ajouter les événements pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

// Exporter les fonctions pour utilisation globale
window.changeLanguage = changeLanguage;
window.t = t;