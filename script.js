document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura para el título
    const profileTitle = document.querySelector('.title');
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
    
    typeWriter();
    
    // Efecto de aparición para las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 300 + index * 100);
    });
    
    // Efecto de progreso para las habilidades (opcional)
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.parentElement.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = width;
        }, 1000);
    });
    
    // Efecto de conteo para estadísticas (opcional)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    });
    
    // Animación para las habilidades al hacer hover
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.transform = 'scale(1.1)';
            skill.style.transition = 'transform 0.3s ease';
        });
        
        skill.addEventListener('mouseout', () => {
            skill.style.transform = 'scale(1)';
        });
    });
});
