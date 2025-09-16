document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura para el título
    const profileTitle = document.querySelector('.profile-text h2');
    const originalText = profileTitle.textContent;
    profileTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            profileTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Iniciar efecto de escritura
    setTimeout(typeWriter, 1000);
    
    // Efecto de aparición para las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + index * 100);
    });
    
    // Efecto de progreso para las habilidades
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, 500 + index * 50);
    });
    
    // Efecto de interacción con las tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Efecto de parpadeo en el icono de perfil
    const profileImg = document.querySelector('.profile-img');
    setInterval(() => {
        profileImg.style.boxShadow = '0 0 25px var(--primary)';
        setTimeout(() => {
            profileImg.style.boxShadow = '0 0 20px var(--primary)';
        }, 300);
    }, 5000);
    
    // Efecto de movimiento en elementos de fondo
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(el => {
        const randomX = (Math.random() - 0.5) * 40;
        const randomY = (Math.random() - 0.5) * 40;
        el.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
    
    // Actualizar año actual en el footer
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} Yoinner David Alayo Rodriguez - Todos los derechos reservados`;
});
