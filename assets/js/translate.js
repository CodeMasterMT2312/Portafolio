document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            greeting: "Hello! I'm",
            name: "Mathias Teran",
            title: "Software Developer",
            aboutTitle: "About Me",
            aboutText: "Hello! I am a Software Developer. Although I have little experience in front-end web development, I enjoy transforming ideas into interactive experiences. I am learning .NET and looking for opportunities to continue growing in the field of programming and development.",
            stackTitle: "Stack",
            frontEndTitle: "Front-End",
            databasesTitle: "DATABASES",
            programmingLanguagesTitle: "Programming Languages",
            project1Title: "Cinema Reservation",
            project1Text: "This project is a cinema reservation system developed in Java, designed to optimize the experience of moviegoers by managing their seat reservations.",
            project1Tech: "Technologies",
            project2Title: "Clothing Catalog",
            project2Text: "A clothing catalog. Allows users to explore products.",
            project2Tech: "Technologies",
            project3Title: "Calculator",
            project3Text: "Simple calculator",
            project3Tech: "Technologies",
            project4Title: "Chat Interface",
            project4Text: "Chat interface design practice",
            project4Tech: "Technologies",
            contactTitle: "Contact",
            contactDescription: "You can contact me through the following email address:",
        },
        es: {
            greeting: "¡Hola!, soy",
            name: "Mathias Teran",
            title: "Desarrollador de Software",
            aboutTitle: "Sobre mi",
            aboutText: "¡Hola! Soy desarrollador de Software. Aunque tengo poca experiencia en el desarrollo web front-end, disfruto transformando ideas en experiencias interactivas. Estoy aprendiendo .NET y busco oportunidades para seguir creciendo en el campo de la programación y el desarrollo.",
            stackTitle: "Stack",
            frontEndTitle: "Front-End",
            databasesTitle: "DATABASES",
            programmingLanguagesTitle: "Lenguajes de Programación",
            project1Title: "Reserva de Cine",
            project1Text: "Este proyecto es un sistema de reserva de cine desarrollado en Java, diseñado para optimizar la experiencia de los cinéfilos al gestionar sus reservas de asientos.",
            project1Tech: "Tecnologías",
            project2Title: "Catálogo de Ropa",
            project2Text: "Un catálogo de ropa. Permite a los usuarios explorar productos.",
            project2Tech: "Tecnologías",
            project3Title: "Calculadora",
            project3Text: "Calculadora simple",
            project3Tech: "Tecnologías",
            project4Title: "Interfaz de chat",
            project4Text: "Practica de diseño de una interfaz de chat",
            project4Tech: "Tecnologías",
            contactTitle: "Contacto",
            contactDescription: "Puedes contactarme a través del siguiente correo electrónico:",
        }
    };

    const translatePage = (language) => {
        const elements = {
            greeting: document.getElementById('greeting'),
            name: document.getElementById('name'),
            title: document.getElementById('title'),
            aboutTitle: document.getElementById('about-title'),
            aboutText: document.getElementById('about-text'),
            stackTitle: document.getElementById('stack-title'),
            frontEndTitle: document.getElementById('front-end-title'),
            databasesTitle: document.getElementById('databases-title'),
            programmingLanguagesTitle: document.getElementById('programming-languages-title'),
            project1Title: document.getElementById('project1-title'),
            project1Text: document.getElementById('project1-text'),
            project1Tech: document.getElementById('project1-tech'),
            project2Title: document.getElementById('project2-title'),
            project2Text: document.getElementById('project2-text'),
            project2Tech: document.getElementById('project2-tech'),
            project3Title: document.getElementById('project3-title'),
            project3Text: document.getElementById('project3-text'),
            project3Tech: document.getElementById('project3-tech'),
            project4Title: document.getElementById('project4-title'),
            project4Text: document.getElementById('project4-text'),
            project4Tech: document.getElementById('project4-tech'),
            contactTitle: document.getElementById('contact-title'),
            contactDescription: document.getElementById('contact-description'),
        };

        const translation = translations[language];

        for (const key in translation) {
            if (elements[key]) {
                elements[key].textContent = translation[key];
            }
        }
    };

    document.getElementById('translate-en').addEventListener('click', () => {
        translatePage('en');
    });

    document.getElementById('translate-es').addEventListener('click', () => {
        translatePage('es');
    });
});
