// Puedes añadir funcionalidades aquí
document.addEventListener('DOMContentLoaded', function() {
    console.log('CLIN PET cargado correctamente');
    
    // Ejemplo: Smooth scrolling para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Aquí puedes añadir más funcionalidades
    // como menú móvil, animaciones, etc.
});