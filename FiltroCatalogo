document.addEventListener('DOMContentLoaded', () => {
  const botonesFiltro = document.querySelectorAll('.filtro-btn');
  const productos = document.querySelectorAll('.producto');

  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria');

      botonesFiltro.forEach(btn => btn.classList.remove('active'));
      boton.classList.add('active');

      productos.forEach(fila => {
        if (categoria === 'todos' || fila.getAttribute('data-categoria') === categoria) {
          fila.style.display = 'flex'; 
        } else {
          fila.style.display = 'none';
        }
      });
    });
  });
});
