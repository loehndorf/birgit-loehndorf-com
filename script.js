const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "hero.title": "Strategic Advisory for Innovation, Communication & Business Growth",
        "hero.subtitle": "Co-Founder & CEO Quantego (Exit 2024) | Entrepreneur | PhD",
        "hero.tags": "START-UPS · DIGITAL STRATEGY · AI & AUTOMATION · COMMUNICATION · SCALING",
        "btn.contact": "Get in Touch",
        "about.title": "About Me",
        "about.text": "I’m a strategy-driven entrepreneur and former academic in the field of marketing and management. With over a decade of experience in innovation, digital transformation, and business development, I co-founded and led Quantego, a deep tech company in energy optimization. The venture secured competitive funding, went through international accelerators, and landed major clients like BASF and Verbund, culminating in a successful exit in 2024.<br><br>Today, I operate as an independent advisor—supporting organizations across industries in building digital strategies, scaling business models, and implementing automation-driven communication and marketing structures.<br><br>My work ranges from start-ups and scale-ups to traditional businesses navigating digital transformation.",
        "stat.years": "Years Experience",
        "stat.exit": "Successful Exit",
        "stat.phd": "Marketing Management",
        "exp.title": "Track Record",
        "exp.date1": "2025 – PRESENT",
        "exp.role1": "Independent Strategic Advisor",
        "exp.comp1": "Switzerland",
        "exp.desc1": "Project-based advisory in innovation, digital communication, and growth strategy.",
        "exp.date2": "2018 – 2024",
        "exp.role2": "Co-Founder & CEO",
        "exp.comp2": "Quantego (Deep Tech / Energy) | Luxembourg / Vienna",
        "exp.desc2": "Led company to successful exit. Acquired major customers and secured funding from leading accelerators.",
        "exp.date3": "2013 – 2018",
        "exp.role3": "Assistant Professor of Marketing",
        "exp.comp3": "WU Vienna",
        "exp.desc3": "Research and teaching in marketing and strategic management.",
        "exp.date4": "2014",
        "exp.edu1": "PhD in Marketing/Management",
        "exp.comp4": "University of Vienna",
        "exp.grade": "With distinction",
        "svc.title": "Services",
        "svc.t1": "Strategic Advisory",
        "svc.d1": "Tailored strategy. Sharpening positioning, business models, and operational processes for scalable success.",
        "svc.t2": "Scaling & Growth",
        "svc.d2": "Designing structures and strategies to expand reach, revenue, and partnerships.",
        "svc.t3": "Brand & Communication Strategy",
        "svc.d3": "Creating clear narratives and cohesive digital presence to build lasting trust.",
        "svc.t4": "Innovation Strategy",
        "svc.d4": "Using automation and emerging tech to boost efficiency and competitive edge.",
        "contact.title": "Get in Touch",
        "contact.text": "Interested in working together? Let's discuss how I can support your venture."
    },
    de: {
        "nav.home": "Home",
        "nav.about": "Über mich",
        "nav.services": "Leistungen",
        "nav.contact": "Kontakt",
        "hero.title": "Strategic Advisory for Innovation, Communication & Business Growth",
        "hero.subtitle": "Co-Founder & CEO Quantego (Exit 2024) | Unternehmerin | PhD",
        "hero.tags": "START-UPS · DIGITALE STRATEGIE · AI & AUTOMATION · KOMMUNIKATION · SKALIERUNG",
        "btn.contact": "Kontakt aufnehmen",
        "about.title": "Über mich",
        "about.text": "Ich bin eine strategisch denkende Unternehmerin und ehemalige Wissenschaftlerin im Bereich Marketing und Management. Mit über zehn Jahren Erfahrung in Innovation, digitaler Transformation und Geschäftsentwicklung habe ich Quantego mitgegründet und geleitet – ein Deep-Tech-Unternehmen zur Energieoptimierung. Das Unternehmen sicherte sich kompetitive Fördermittel, durchlief internationale Accelerator-Programme und gewann Großkunden wie BASF und Verbund – mit erfolgreichem Exit im Jahr 2024.<br><br>Heute bin ich als unabhängige Beraterin tätig und unterstütze Organisationen aus verschiedenen Branchen beim Aufbau digitaler Strategien, der Skalierung von Geschäftsmodellen sowie bei der Implementierung automatisierter Kommunikations- und Marketingstrukturen.<br><br>Meine Kunden reichen von Start-ups und Scale-ups bis hin zu etablierten Unternehmen im digitalen Wandel.",
        "stat.years": "Jahre Erfahrung",
        "stat.exit": "Erfolgreicher Exit",
        "stat.phd": "Marketing Management",
        "exp.title": "Werdegang",
        "exp.date1": "SEIT 2025",
        "exp.role1": "Unabhängige Strategieberaterin",
        "exp.comp1": "Schweiz",
        "exp.desc1": "Projektbasierte Beratung in Innovation, digitaler Kommunikation und Wachstumsstrategie.",
        "exp.date2": "2018 – 2024",
        "exp.role2": "Co-Founder & CEO",
        "exp.comp2": "Quantego (Deep Tech / Energie) | Luxemburg / Wien",
        "exp.desc2": "Führung des Unternehmens zum erfolgreichen Exit 2024. Sicherung von Finanzierung und Gewinnung von Großkunden wie BASF und Verbund.",
        "exp.date3": "2013 – 2018",
        "exp.role3": "Assistenzprofessorin für Marketing",
        "exp.comp3": "WU Wien",
        "exp.desc3": "Forschung und Lehre in Marketing und strategischem Management.",
        "exp.date4": "2014",
        "exp.edu1": "PhD in Marketing/Management",
        "exp.comp4": "Universität Wien",
        "exp.grade": "Mit Auszeichnung",
        "svc.title": "Leistungen",
        "svc.t1": "Strategische Beratung",
        "svc.d1": "Maßgeschneiderte Strategien. Positionierung, Geschäftsmodelle und Prozesse schärfen – für nachhaltige Skalierung.",
        "svc.t2": "Skalierung & Wachstum",
        "svc.d2": "Strukturen und Strategien entwickeln, um Reichweite, Umsatz und Partnerschaften auszubauen.",
        "svc.t3": "Marken- & Kommunikationsstrategie",
        "svc.d3": "Klare Botschaften und ein konsistenter digitaler Auftritt – für Vertrauen und Sichtbarkeit.",
        "svc.t4": "Innovationsstrategie",
        "svc.d4": "Automatisierung und neue Technologien nutzen – für Effizienz und digitale Wettbewerbsvorteile.",
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
