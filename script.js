const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "hero.title": "Strategic Advisory",
        "hero.subtitle": "Co-Founder & CEO Quantego (Exit 2024) | Entrepreneur | PhD",
        "hero.tags": "Start-ups · Innovation · Deep Tech · AI · Business Development",
        "btn.contact": "Get in Touch",
        "about.title": "About Me",
        "about.text": "I am an avid professional and former researcher in strategic management and marketing. As a serial entrepreneur with 10+ years of experience in start-ups, innovation, and business development, I co-founded and led Quantego, a deeptech company in energy optimization. Under my leadership, the company secured competitive funding, advanced through international accelerator programs, and attracted major customers such as BASF and Verbund – concluding with a successful exit in 2024.",
        "stat.years": "Years Experience",
        "stat.exit": "Successful Exit",
        "stat.phd": "Marketing Management",
        "exp.title": "Track Record",
        "exp.role1": "Strategic Advisor & Entrepreneur",
        "exp.desc1": "Providing project-based services in entrepreneurship, digital innovation, and business development. Supporting start-ups with strategy and growth.",
        "exp.role2": "Co-founder & CEO",
        "exp.desc2": "Led the company to successful exit in 2024. Secured competitive funding and attracted major customers like BASF and Verbund.",
        "exp.role3": "Assistant Professor of Marketing",
        "exp.desc3": "Research and teaching in marketing management.",
        "exp.edu1": "PhD in Marketing/Management",
        "exp.grade": "With distinction",
        "svc.title": "Services",
        "svc.t1": "Strategic Advisory",
        "svc.d1": "Tailored strategy for tech companies navigating complex market shifts.",
        "svc.t2": "Scaling & Growth",
        "svc.d2": "Business development structures to scale from start-up to international player.",
        "svc.t3": "Innovation Strategy",
        "svc.d3": "Applying AI and deep tech insights to create competitive advantages.",
        "contact.title": "Get in Touch",
        "contact.text": "Interested in working together? Let's discuss how I can support your venture."
    },
    de: {
        "nav.home": "Home",
        "nav.about": "Über mich",
        "nav.services": "Leistungen",
        "nav.contact": "Kontakt",
        "hero.title": "Strategische Beratung",
        "hero.subtitle": "Co-Founder & CEO Quantego (Exit 2024) | Entrepreneur | PhD",
        "hero.tags": "Start-ups · Innovation · Deep Tech · AI · Business Development",
        "btn.contact": "Kontakt aufnehmen",
        "about.title": "Über mich",
        "about.text": "Ich bin ein passionierte Unternehmerin und ehemalige Forscherin im Bereich strategisches Management und Marketing. Als Serial Entrepreneur mit über 10 Jahren Erfahrung in Start-ups, Innovation und Business Development habe ich Quantego mitgegründet und geleitet, ein Deep-Tech-Unternehmen zur Energieoptimierung. Unter meiner Führung sicherte sich das Unternehmen wettbewerbsfähige Finanzierungen, durchlief internationale Accelerator-Programme und gewann Großkunden wie BASF und Verbund – was 2024 in einem erfolgreichen Exit mündete.",
        "stat.years": "Jahre Erfahrung",
        "stat.exit": "Erfolgreicher Exit",
        "stat.phd": "Marketing Management",
        "exp.title": "Werdegang",
        "exp.role1": "Strategische Beraterin & Unternehmerin",
        "exp.desc1": "Projektbasierte Dienstleistungen in Entrepreneurship, digitaler Innovation und Geschäftsentwicklung. Strategische Unterstützung für Start-ups.",
        "exp.role2": "Co-Founder & CEO",
        "exp.desc2": "Führung des Unternehmens zum erfolgreichen Exit 2024. Sicherung von Finanzierung und Gewinnung von Großkunden wie BASF und Verbund.",
        "exp.role3": "Assistenzprofessorin für Marketing",
        "exp.desc3": "Forschung und Lehre im Marketingmanagement.",
        "exp.edu1": "PhD in Marketing/Management",
        "exp.grade": "Mit Auszeichnung",
        "svc.title": "Leistungen",
        "svc.t1": "Strategische Beratung",
        "svc.d1": "Maßgeschneiderte Strategien für Tech-Unternehmen in komplexen Märkten.",
        "svc.t2": "Skalierung & Wachstum",
        "svc.d2": "Business Development Strukturen für den Weg vom Start-up zum internationalen Player.",
        "svc.t3": "Innovationsstrategie",
        "svc.d3": "Nutzung von AI und Deep Tech Insights für Wettbewerbsvorteile.",
        "contact.title": "Kontakt",
        "contact.text": "Interessiert an einer Zusammenarbeit? Lassen Sie uns sprechen."
    }
};

const defaultLang = 'en';

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update button text
    const btn = document.getElementById('lang-switch');
    btn.textContent = lang === 'en' ? 'DE' : 'EN';
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    let currentLang = userLang.startsWith('de') ? 'de' : 'en';

    setLanguage(currentLang);

    document.getElementById('lang-switch').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'de' : 'en';
        setLanguage(currentLang);
    });
});
