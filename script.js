// --- script.js (Intégralité du fichier mis à jour) ---

// --- PROTECTION CONTRE LES ERREURS SUR LES PAGES MULTIPLES ---

// 1. Typed Text Effect (Uniquement si l'élément existe)
const typedElement = document.getElementById('typedText');
if (typedElement) {
    const texts = [
        "Technicien Systèmes et Réseaux",
        "Administration Infrastructure",
        "Sécurité Informatique",
        "Étudiant BTS SIO SISR"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
    // Démarrer
    typeText();
}

// 2. Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars (seulement si présents)
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        }
    });
}, observerOptions);

// Observer toutes les sections présentes sur la page courante
document.querySelectorAll('section').forEach(section => {
    // On ajoute la classe pour l'animation initiale via CSS
    section.classList.add('fade-init'); 
    observer.observe(section);
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) { // Sécurité supplémentaire
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        document.getElementById('navMenu').classList.toggle('active');
    });
}

// Modal Data
const modalData = {
    // Les projets existants
    projet1: {
        title: "Infrastructure Réseau",
        description: "Conception et mise en place d'une infrastructure réseau d'entreprise avec segmentation VLAN, routage inter-VLAN et politique de sécurité.",
        details: [
            "Configuration de switches Cisco avec VLAN",
            "Mise en place du routage inter-VLAN",
            "Configuration WEB et DNS",
            "Documentation technique complète",
            "Box Wifi"
        ],
        // MODIFICATION : Transformé en tableau pour les pastilles
        competences: [
            "Mettre à disposition des utilisateurs un service informatique",
            "Gérer le patrimoine informatique"
        ]
    },
    projet2: {
        title: "Domaine Active Directory",
        description: "Déploiement et configuration d'un domaine Active Directory avec gestion centralisée des utilisateurs et des stratégies de groupe.",
        details: [
            "Installation et configuration d'Active Directory",
            "Création d'unités organisationnelles",
            "Mise en place de GPO de sécurité",
            "Gestion des droits et permissions"
        ],
        // MODIFICATION : Transformé en tableau
        competences: [
            "Gérer le patrimoine informatique",
            "Mettre à disposition des utilisateurs un service informatique"
        ]
    },
    projet3: {
        title: "Sécurisation d'Infrastructure",
        description: "Mise en œuvre de solutions de sécurité pour protéger l'infrastructure réseau de l'entreprise.",
        details: [
            "Configuration d'un pare-feu pfSense",
            "Mise en place d'un VPN IPsec",
            "Règles de filtrage et NAT",
            "Monitoring et logs de sécurité"
        ],
        // MODIFICATION : Transformé en tableau
        competences: [
            "Mettre à disposition des utilisateurs un service informatique"
        ]
    },
    // Nouveaux projets AP SIO
    projet4: {
        title: "Projet AP SIO S1 : Infrastructure Egnaro",
        description: "Conception, déploiement et sécurisation complète d'une infrastructure d'entreprise (Egnaro) pour l'hébergement de son site WEB, intégrant segmentation réseau (VLAN), DHCP, RDP sécurisé et gestion des différents profils utilisateurs (Admin, Dev, Clients).",
        details: [
            "Mise en place d'un plan d'adressage IP justifié (statique et dynamique/DHCP)",
            "Sécurisation des OS et des accès (comptes, chiffrement, SSH/SFTP)",
            "Déploiement du serveur WEB, DNS et BDD (PHP/PHPmyadmin)",
            "Mise en place de la segmentation réseau par VLAN (Admin, Dev, Clients)",
            "Configuration du routage inter-VLAN et du Point d'Accès Wifi sécurisé",
            "Gestion d'un service RDP chiffré pour la visualisation par le DSI"
        ],
        // MODIFICATION : Transformé en tableau
        competences: [
            "Travailler en mode projet",
            "Mettre à disposition des utilisateurs un service informatique",
            "Développer la présence en ligne de l’organisation"
        ]
    },
    projet5: {
        title: "Projet AP SIO S2 : Infrastructure Geltram",
        description: "Modernisation et sécurisation de l'infrastructure informatique de la société Geltram. Conception d'une architecture réseau segmentée (LAN/DMZ), déploiement de services d'administration centralisés et mise en place d'une politique de sécurité active.",
        details: [
            "Architecture réseau sécurisée avec 5 VLANs (Admin, Commerciaux, Production, Serveurs, Sauvegarde) et zone DMZ",
            "Sécurisation périmétrique via pare-feu pfSense, filtrage ACL et sonde de détection d'intrusion Snort",
            "Administration centralisée : Active Directory (GPO, UO), DNS, DHCP et gestion des identifiants",
            "Gestion de parc et maintenance : Service Helpdesk (GLPI), déploiement d'images (FOG) et mises à jour (WSUS)",
            "Haute disponibilité et sécurité : Serveur de sauvegarde (Proxmox Backup/NAS) et mise en place d'un Honey Pot"
        ],
        // MODIFICATION : Transformé en tableau
        competences: [
            "Répondre aux incidents et aux demandes d’assistance et d’évolution",
            "Gérer le patrimoine informatique",
            "Travailler en mode projet"
        ]
    },
    projet6: {
        title: "Projet AP SIO S3 : DMZ et Haute Disponibilité (GSB)",
        description: "Mise en place d'une architecture critique pour l'application de gestion des frais de GSB, en garantissant une haute disponibilité (tolérance de panne) des services et une sécurité périmétrique avancée via une DMZ.",
        details: [
            "Conception d'une architecture à tolérance de panne (réplication) pour les services critiques (Web et BDD)",
            "Déploiement d'une DMZ sécurisée via un pare-feu OPNsense pour l'accès public à l'application Web (HTTPS/SSL/TLS)",
            "Mise en place de la réplication des services d'infrastructure : Active Directory (AD), DHCP, et DNS (Primaire et Secondaire)",
            "Configuration des serveurs Web et BDD pour fonctionner de manière sécurisée (Application en DMZ, BDD sur le LAN)",
            "Test des fonctionnalités de routage, de haute disponibilité et de basculement."
        ],
        // MODIFICATION : Transformé en tableau
        competences: [
            "Mettre à disposition des utilisateurs un service informatique",
            "Travailler en mode projet"
        ]
    },
    projet7: {
        title: "Projet AP SIO S3B : Amélioration Infrastructure GSB",
        description: "Optimisation avancée de l'infrastructure GSB existante. Mise en place d'une défense en profondeur, automatisation des tâches administratives et déploiement d'une solution complète de supervision et de sécurité (SIEM/IPS).",
        details: [
            "Renforcement de la sécurité réseau : Architecture 'Défense en profondeur' avec double pare-feu et segmentation DMZ multiple",
            "Mise en place d'un Répartiteur de Charge (Load Balancer) pour le cluster Web",
            "Automatisation via PowerShell : Scripts d'installation/configuration des services Windows et gestion des utilisateurs AD (import CSV)",
            "Supervision et Sécurité : Centralisation des logs, analyse via SIEM et détection/blocage d'intrusions (IPS)",
            "Monitoring proactif de l'état de santé des serveurs et équipements réseaux"
        ],
        // MODIFICATION : Transformé en tableau
        competences: [
            "Gérer le patrimoine informatique",
            "Organiser son développement professionnel"
        ]
    }
};

// Modal Functions
function openModal(projetId) {
    const modal = document.getElementById('projetModal');
    const content = document.getElementById('modalContent');
    
    if (modal && content && modalData[projetId]) {
        const data = modalData[projetId];
        
        // MODIFICATION : Génération dynamique des pastilles HTML pour les compétences
        const competenceBadgesHTML = data.competences
            .map(comp => `<span class="tech-badge">${comp}</span>`)
            .join('');

        content.innerHTML = `
            <h2>${data.title}</h2>
            <p style="margin: 1rem 0;">${data.description}</p>
            <h3 style="color: var(--primary); margin-top: 1.5rem;">Détails du projet :</h3>
            <ul style="margin-left: 1.5rem;">
                ${data.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <h3 style="color: var(--primary); margin-top: 1.5rem;">Compétences mobilisées :</h3>
            <div class="competence-badges">
                ${competenceBadgesHTML}
            </div>
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('projetModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projetModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
            
        try {
            const response = await fetch('contact.php', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            alert(data.message);
            if (data.statut === 'success') {
                this.reset();
            }
        } catch (error) {
            alert('Erreur lors de l\'envoi du message');
        }
    });
}