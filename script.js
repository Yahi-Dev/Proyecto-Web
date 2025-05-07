// Código existente para el menú móvil
document.getElementById('mobileMenuToggle').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
});

// Nuevo código para el scroll y cierre del menú
document.querySelector('.btn-cita').addEventListener('click', function() {
    // Cerrar menú móvil
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
    
    // Restaurar icono del menú
    const mobileToggle = document.getElementById('mobileMenuToggle');
    mobileToggle.querySelector('i').classList.remove('fa-times');
    mobileToggle.querySelector('i').classList.add('fa-bars');
    
    // Scroll suave a la sección
    document.getElementById('citas').scrollIntoView({ 
        behavior: 'smooth' 
    });
});