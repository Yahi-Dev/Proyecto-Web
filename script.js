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


document.addEventListener('DOMContentLoaded', function() {
    // Configuración de la animación
    const smoothScroll = function(targetId) {
      const target = document.querySelector(targetId);
      if (!target) return;
      
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duración en milisegundos
      let startTime = null;
      
      // Función de animación
      const animation = function(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      
      // Función de easing para efecto suave
      const easeInOutQuad = function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      };
      
      requestAnimationFrame(animation);
    };
    
    // Aplicar a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        // Agrega clase para scroll suave
        document.documentElement.classList.add('smooth-scroll');
        
        smoothScroll(targetId);
        
        // Remueve la clase después de la animación
        setTimeout(() => {
          document.documentElement.classList.remove('smooth-scroll');
        }, 800);
      });
    });
  });
