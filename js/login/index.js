document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Evitar envío del formulario por defecto
    e.preventDefault(); 
  
    // Si la validación es exitosa, redirige al usuario a la página principal
    window.location.href = 'http://127.0.0.1:5500/index.html';
});
  