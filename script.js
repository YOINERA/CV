document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año actual en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    // Crear efecto de matrix code
    createMatrixBackground();
    
    // Crear partículas flotantes
    createFloatingParticles();
    
    // Efecto de escritura de terminal
    typeWriterEffect();
    
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
    
    // Efecto de interacción con las tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 25px var(--neon-purple), 0 0 50px rgba(189, 0, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'var(--glow-purple)';
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
    
    // Efecto de terminal typing para títulos
    const titles = document.querySelectorAll('.card h3');
    titles.forEach(title => {
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        function typeTitle() {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeTitle, 50);
            }
        }
        
        setTimeout(typeTitle, 800);
    });
    
    // Función para crear efecto de matrix code
    function createMatrixBackground() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-bg';
        document.body.appendChild(matrixContainer);
        
        // Crear efecto de caracteres cayendo (simulado con CSS)
        matrixContainer.innerHTML = `
            <style>
                .matrix-bg {
                    background: linear-gradient(transparent 90%, var(--dark-bg) 10%);
                    background-size: 100% 4px;
                    animation: matrix-rain 20s infinite linear;
                }
                
                @keyframes matrix-rain {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }
            </style>
        `;
    }
    
    // Función para crear partículas flotantes
    function createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        document.body.appendChild(particlesContainer);
        
        const particleCount = 30;
        
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
            
            // Color aleatorio (verde matrix, azul neón o púrpura)
            const colors = ['#00ff4c', '#0066ff', '#bd00ff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = randomColor;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Efecto de escritura para el perfil
    function typeWriterEffect() {
        const profileTitle = document.querySelector('.profile-text h2');
        const originalText = profileTitle.textContent;
        profileTitle.textContent = '';
        profileTitle.classList.add('typing-effect');
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                profileTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                profileTitle.classList.remove('typing-effect');
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Efecto de sonido al pasar el ratón sobre elementos (opcional)
    const interactiveElements = document.querySelectorAll('.contact-item, .skill-tag, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Podrías agregar sonidos futuristas aquí si lo deseas
        });
    });
});
