// JavaScript 
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi! I'm Lucía and Welcome to my creative world of UX design, where every detail shapes a better experience.";
    const hero = document.getElementById('hero');
    let currentText = "";
    let currentIdx = 0;

    const tmId = setInterval(function() {
        currentText += text.charAt(currentIdx++);
        hero.textContent = currentText;

        if (currentIdx >= text.length) {
            clearInterval(tmId);
        }
    }, 80);

    if(typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8a2be2,
            backgroundColor: 0x121212,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                document.querySelectorAll('.project-details').forEach(detail => {
                    detail.style.display = 'none';
                });
                
                if(targetElement.classList.contains('project-details')) {
                    targetElement.style.display = 'block';
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación para el diagrama de metodología
    const animateDiagram = () => {
        const diagrams = document.querySelectorAll('.degradation-diagram');
        if (!diagrams.length) return;

        // Añadir clase para iniciar animación cuando el elemento es visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        diagrams.forEach(diagram => {
            observer.observe(diagram);
        });
    };

    // Funcionalidad de las pestañas
    const initTabs = () => {
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Encontrar el contenedor de pestañas padre
                const tabsSection = button.closest('.tabs-section');
                
                // Desactivar todas las pestañas en este contenedor
                tabsSection.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                tabsSection.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Activar la pestaña seleccionada
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    };

    // Iniciar animaciones y funcionalidades cuando se carga la página
    animateDiagram();
    initTabs();
});