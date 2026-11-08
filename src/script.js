
// ==========================================
// BILINGUAL PORTFOLIO
// English by default | Spanish on request
// ==========================================

document.documentElement.classList.add('js-motion');

let currentLang = 'en';

const translations = {
  en: {
    'meta[name="description"]': ['Rocío Reyes Marroquín’s digital portfolio: technology, programming, education and projects.'],
    'title': ['Rocío Reyes | Portafolio'],
    '.skip-link': ['Skip to content'],
    '.brand': ['<span class="brand-mark">R</span><span>Senior<span class="brand-dot">.</span></span>'],

    '.nav-links > a:not(.nav-contact)': [
      'About Me',
      'Personal Project',
      'Projects',
      'Education'
    ],
    '.nav-contact': ['Contact <span aria-hidden="true">↗</span>'],

    '.hero-copy .eyebrow': ['<span class="status-dot"></span> PERSONAL PORTFOLIO · 2026'],
    '.hero-copy h1': ['Hi, I’m <span class="gradient-text">Rocío Reyes.</span><br>I create, learn and connect ideas through technology.'],
    '.hero-description': ['Accounting and Administrative Technician student and Front-End Developer with an interest in programming, digital tools and the development of practical solutions.'],
    '.hero-actions a': [
      'Explore my work <span aria-hidden="true">↘</span>',
      'Get to know me'
    ],
    '.hero-meta > span': [
      '<span class="meta-icon">⌘</span> Technology &amp; learning',
      '<span class="meta-icon">◎</span> El Salvador'
    ],
    '.hero-visual': ['Photo of Rocío Reyes'],
    '.photo-placeholder': ['Rocío’s photo placeholder'],
    '.photo-hint': ['PHOTO HERE'],
    '.photo-label span:last-child': ['Curiosity in action'],
    '.chip-code': ['<span>&lt;/&gt;</span> Code with purpose'],
    '.chip-spark': ['<span>✧</span> Always learning'],

    '.ticker-track > span': [
      'TECHNOLOGY', 'PROGRAMMING', 'BUSINESS', 'LEARNING',
      'TECHNOLOGY', 'PROGRAMMING', 'BUSINESS', 'LEARNING'
    ],

    '#sobre-mi .section-heading .eyebrow': ['ABOUT ME'],
    '#sobre-mi .section-heading h2': ['A blend of <span class="gradient-text">technology and practical thinking.</span>'],
    '.about-intro p': [
      'I’m interested in how technology can help organize information, solve problems and turn ideas into useful projects.',
      'My administrative and accounting education gives me an organized perspective, while my interest in technology motivates me to explore digital tools and programming.'
    ],
    '.fact-card h3': [
      'Continuous learning',
      'Organization',
      'Communication'
    ],
    '.fact-card p': [
      'I enjoy developing new skills and putting them into practice.',
      'I value planning, responsibility and doing things well.',
      'My volunteer experience has strengthened my communication and teamwork skills.'
    ],
    '#proyectop .section-heading .eyebrow': ['PERSONAL PROJECT'],
    '#proyectop .section-heading h2': ['A project I created to <span class="gradient-text">practice and learn.</span>'],
    '#proyectop .skill-card h3': ['SKZOO Calendar 2027'],
    '#proyectop .skill-card p': ['Developed a personalized virtual calendar inspired by my favorite music group, designed to organize tasks and manage activities.'],
    '#proyectop .tag-list span': ['View Project'],

    '#proyectos .section-heading .eyebrow': ['ACADEMIC PROJECTS'],
    '#proyectos .section-heading h2': ['What I do, <span class="gradient-text">currently in progress.</span>'],
    '.project-topline span:first-child': [
      'EMPOWERMOMS',
      'TEACHMENOW',
      'VALTRUST'
    ],
    '.project-body h3': [
      'Hackathon Project',
      'Expo Project',
      'Expo-Tech Project'
    ],
    '.project-body p': [
      'I designed the logo and part of the Figma design, including some of the project pages.',
      'Assisted in UI design using Figma, I also designed and developed an interactive test for students.',
      'Designed and developed the Seller webpage, while also collaborating in the programming and development of the Buyer webpage.'
    ],
    '.project-body .text-link': [
      'Evidence↗',
      'Evidence↗',
      'Evidence↗'
    ],

    '#certificados .section-heading .eyebrow': ['CERTIFICATES'],
    '#certificados .section-heading h2': ['Tools and knowledge that are part of <span class="gradient-text">my journey.</span>'],
    '#certificados .skill-card h3': [
      'B2B Sales Strategy',
      'Introduction to E-commerce',
      'Project Management',
      'Excel'
    ],
    '#certificados .skill-card p': [
      'Knowledge of B2B sales strategies and business development.',
      'Basic knowledge of e-commerce and digital business tools.',
      'Communication, organization, responsibility, adaptability and teamwork.',
      'Excel Associate and Excel Expert certifications.'
    ],
    '#certificados .tag-list span': [
      'View certificate',
      'View certificate',
      'View certificate',
      'Excel Associate',
      'Excel Expert'
    ],

    '#formacion .section-heading .eyebrow': ['EDUCATION & EXPERIENCE'],
    '#formacion .section-heading h2': ['Learning is also <span class="gradient-text">moving forward.</span>'],
    '.timeline-date': [
      '2024 — PRESENT',
      '2024 — PRESENT',
      '2025 — 2026',
      'FEBRUARY 2026 — PRESENT',
      'TO BE COMPLETED'
    ],
    '.timeline-content h3': [
      'Technical High School Diploma in Administrative Accounting',
      '¡Supérate! Business Program',
      'Excel Certifications',
      'Volunteer — English Kids',
      'Programming Experience / Fronter'
    ],
    '.timeline-content p': [
      'Complejo Educativo Soldado Oscar Antonio Ortiz Reyes.',
      'Program scholar. English| ICT |Values.',
      'Excel Associate (November 2025) and Excel Expert (March 2026).',
      'Teaching English to children, preparing educational activities and developing communication and group-management skills.',
      'Participated and collaborated in various technological and academic projects, including hackathons, exhibitions, and events such as Expo and ExpoTech, contributing to the design, development, and programming of digital solutions.'
    ],

    '#contacto .eyebrow': ['CONTACT'],
    '#contacto h2': ['Shall we create something <span class="gradient-text">interesting?</span>'],
    '#contacto .contact-panel > p:not(.eyebrow)': ['I’m building my professional path and open to learning, collaborating and exploring new opportunities.'],
    '#contacto .contact-actions .button-primary': ['Send me an email <span aria-hidden="true">↗</span>'],
    '.footer-inner > p': ['Designed and coded with curiosity. © <span id="year">2026</span> Rocío Reyes.'],
    '.back-top': ['Back to top ↑']
  },

  es: {
    'meta[name="description"]': ['Portafolio digital de Rocío Reyes Marroquín: tecnología, programación, formación y proyectos.'],
    'title': ['Rocío Reyes | Portafolio'],
    '.skip-link': ['Saltar al contenido'],
    '.brand': ['<span class="brand-mark">R</span><span>Senior<span class="brand-dot">.</span></span>'],

    '.nav-links > a:not(.nav-contact)': [
      'Sobre mí',
      'Proyecto personal',
      'Proyectos',
      'Formación'
    ],
    '.nav-contact': ['Contacto <span aria-hidden="true">↗</span>'],

    '.hero-copy .eyebrow': ['<span class="status-dot"></span> PORTAFOLIO PERSONAL · 2026'],
    '.hero-copy h1': ['Hola, soy <span class="gradient-text">Rocío Reyes.</span><br>Creo, aprendo y conecto ideas con tecnología.'],
    '.hero-description': ['Estudiante de Técnico Administrativo Contable y desarrolladora Front-End, con interés en la programación, las herramientas digitales y la creación de soluciones prácticas.'],
    '.hero-actions a': [
      'Explorar mi trabajo <span aria-hidden="true">↘</span>',
      'Conocerme mejor'
    ],
    '.hero-meta > span': [
      '<span class="meta-icon">⌘</span> Tecnología y aprendizaje',
      '<span class="meta-icon">◎</span> El Salvador'
    ],
    '.hero-visual': ['Fotografía de Rocío Reyes'],
    '.photo-placeholder': ['Espacio para la fotografía de Rocío'],
    '.photo-hint': ['FOTO AQUÍ'],
    '.photo-label span:last-child': ['Curiosidad en acción'],
    '.chip-code': ['<span>&lt;/&gt;</span> Código con propósito'],
    '.chip-spark': ['<span>✧</span> Siempre aprendiendo'],

    '.ticker-track > span': [
      'TECNOLOGÍA', 'PROGRAMACIÓN', 'NEGOCIOS', 'APRENDIZAJE',
      'TECNOLOGÍA', 'PROGRAMACIÓN', 'NEGOCIOS', 'APRENDIZAJE'
    ],

    '#sobre-mi .section-heading .eyebrow': ['SOBRE MÍ'],
    '#sobre-mi .section-heading h2': ['Una mezcla de <span class="gradient-text">tecnología y visión práctica.</span>'],
    '.about-intro p': [
      'Me interesa cómo la tecnología puede ayudar a organizar información, resolver problemas y convertir ideas en proyectos útiles.',
      'Mi formación administrativa y contable me aporta una mirada organizada, mientras que mi interés por la tecnología me impulsa a explorar herramientas digitales y programación.'
    ],
    '.fact-card h3': [
      'Aprendizaje continuo',
      'Organización',
      'Comunicación'
    ],
    '.fact-card p': [
      'Me gusta adquirir nuevas habilidades y ponerlas en práctica.',
      'Valoro la planificación, la responsabilidad y el trabajo bien hecho.',
      'Mi experiencia de voluntariado ha fortalecido mi comunicación y trabajo con grupos.'
    ],

    '#proyectop .section-heading .eyebrow': ['PROYECTO PERSONAL'],
    '#proyectop .section-heading h2': ['Un proyecto que realicé para <span class="gradient-text">practicar y aprender.</span>'],
    '#proyectop .skill-card h3': ['Calendario SKZOO 2027'],
    '#proyectop .skill-card p': ['Desarrollé un calendario virtual personalizado inspirado en mi grupo musical favorito, diseñado para organizar tareas y gestionar actividades.'],
    '#proyectop .tag-list span': ['Ver Proyecto'],

    '#proyectos .section-heading .eyebrow': ['PROYECTOS ACADÉMICOS'],
    '#proyectos .section-heading h2': ['Lo que hago, <span class="gradient-text">en construcción.</span>'],
    '.project-topline span:first-child': [
      'EMPOWERMOMS',
      'TEACHMENOW',
      'VALTRUST'
    ],
    '.project-body h3': [
      'Proyecto de Hackathon',
      'Proyecto de Expo',
      'Proyecto de Expo-Tech'
    ],
    '.project-body p': [
      'Diseñé el logo y parte del diseño en Figma, incluyendo algunas páginas del proyecto.',
      'Colaboré en el diseño de interfaces utilizando Figma También diseñé y desarrollé un test interactivo dirigido a estudiantes.',
      'Diseñé y desarrollé la página web de Seller, además de colaborar en la programación y desarrollo de la página de Buyer.'
    ],
    '.project-body .text-link': [
      'Evidencia↗',
      'Evidencia↗',
      'Evidencia↗'
    ],

    '#certificados .section-heading .eyebrow': ['CERTIFICADOS'],
    '#certificados .section-heading h2': ['Herramientas y conocimientos que forman parte de <span class="gradient-text">mi camino.</span>'],
    '#certificados .skill-card h3': [
      'Estrategia de Ventas B2B',
      'Introducción al comercio electrónico',
      'Gestión de proyectos',
      'Excel'
    ],
    '#certificados .skill-card p': [
      'Conocimientos sobre estrategias de ventas B2B y desarrollo empresarial.',
      'Conocimientos básicos de comercio electrónico y herramientas de negocios digitales.',
      'Comunicación, organización, responsabilidad, adaptabilidad y trabajo en equipo.',
      'Certificaciones Excel Associate y Excel Expert.'
    ],
    '#certificados .tag-list span': [
      'Ver certificado',
      'Ver certificado',
      'Ver certificado',
      'Excel Associate',
      'Excel Expert'
    ],

    '#formacion .section-heading .eyebrow': ['FORMACIÓN Y EXPERIENCIA'],
    '#formacion .section-heading h2': ['Aprender también es <span class="gradient-text">avanzar.</span>'],
    '.timeline-date': [
      '2024 — ACTUALIDAD',
      '2024 — ACTUALIDAD',
      '2025 — 2026',
      'FEBRERO 2026 — ACTUALIDAD',
      'POR COMPLETAR'
    ],
    '.timeline-content h3': [
      'Bachillerato Técnico Administrativo Contable',
      'Programa Empresarial ¡Supérate!',
      'Certificaciones de Excel',
      'Voluntariado — English Kids',
      'Experiencia en programación / Fronter'
    ],
    '.timeline-content p': [
      'Complejo Educativo Soldado Oscar Antonio Ortiz Reyes.',
      'Becaria del programa. Inglés | Informática | Valores.',
      'Excel Associate (noviembre de 2025) y Excel Expert (marzo de 2026).',
      'Enseñanza de inglés a niños, preparación de actividades educativas y desarrollo de habilidades de comunicación y manejo de grupos.',
      'He participado y colaborado en diversos proyectos tecnológicos y académicos, incluyendo hackathons, exposiciones y eventos como Expo y ExpoTech, contribuyendo al diseño, desarrollo y programación de soluciones digitales.'
    ],

    '#contacto .eyebrow': ['CONTACTO'],
    '#contacto h2': ['¿Creamos algo <span class="gradient-text">interesante?</span>'],
    '#contacto .contact-panel > p:not(.eyebrow)': ['Estoy construyendo mi camino profesional y estoy abierta a aprender, colaborar y explorar nuevas oportunidades.'],
    '#contacto .contact-actions .button-primary': ['Escríbeme un correo <span aria-hidden="true">↗</span>'],
    '.footer-inner > p': ['Diseñado y programado con curiosidad. © <span id="year">2026</span> Rocío Reyes.'],
    '.back-top': ['Volver arriba ↑']
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  document.documentElement.lang = lang;

  Object.entries(translations[lang]).forEach(([selector, values]) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
      const value = values[index] ?? values[0];
      if (value === undefined) return;

      if (selector === 'meta[name="description"]') {
        element.setAttribute('content', value);
      } else if (selector === 'title') {
        document.title = value;
      } else if (selector === '.skip-link') {
        element.textContent = value;
      } else if (
        selector === '.photo-placeholder' ||
        selector === '.hero-visual'
      ) {
        element.setAttribute('aria-label', value);
      } else {
        element.innerHTML = value;
      }
    });
  });

  document.querySelectorAll('[data-lang]').forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  const menuToggle = document.querySelector('#menu-toggle');

  if (menuToggle) {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute(
      'aria-label',
      isOpen
        ? (lang === 'en' ? 'Close menu' : 'Cerrar menú')
        : (lang === 'en' ? 'Open menu' : 'Abrir menú')
    );
  }

  const nav = document.querySelector('nav.nav-shell');
  if (nav) {
    nav.setAttribute(
      'aria-label',
      lang === 'en' ? 'Main navigation' : 'Navegación principal'
    );
  }

  const languageGroup = document.querySelector('.language-switch');
  if (languageGroup) {
    languageGroup.setAttribute(
      'aria-label',
      lang === 'en' ? 'Select language' : 'Seleccionar idioma'
    );
  }

  const year = document.querySelector('#year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

// Language buttons
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

// Mobile navigation
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen
        ? (currentLang === 'en' ? 'Close menu' : 'Cerrar menú')
        : (currentLang === 'en' ? 'Open menu' : 'Abrir menú')
    );
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute(
        'aria-label',
        currentLang === 'en' ? 'Open menu' : 'Abrir menú'
      );
    });
  });
}

// Reveal animations
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

// Start in English
setLanguage('en');
