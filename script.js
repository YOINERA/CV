document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año actual en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    // Efecto de aparición para las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
    
    // Crear partículas de fondo
    createParticles();
    
    // Efecto de interacción con las tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 35px rgba(0, 102, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 10px 30px rgba(0, 102, 255, 0.15)';
        });
    });
    
    // Efecto de habilidades
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        
        setTimeout(() => {
            tag.style.transition = 'opacity 0.3s ease';
            tag.style.opacity = '1';
        }, 500 + index * 50);
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Detectar si es un dispositivo táctil
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.add('no-touch-device');
    }
    
    // Manejar la visibilidad del botón de impresión al desplazarse
    let lastScrollTop = 0;
    const printBtn = document.querySelector('.print-btn');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            printBtn.style.opacity = '0.7';
        } else {
            // Scrolling up
            printBtn.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Función para crear partículas de fondo
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamaño aleatorio
            const size = Math.random() * 4 + 1;
            
            // Duración de animación aleatoria
            const duration = Math.random() * 20 + 10;
            
            // Retraso aleatorio
            const delay = Math.random() * 5;
            
            particle.style.left = `${posX}vw`;
            particle.style.top = `${posY}vh`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            // Color aleatorio (azul o verde)
            const colors = ['#0066ff', '#00cc99'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = randomColor;
            
            particlesContainer.appendChild(particle);
        }
    }
});
