document.addEventListener('DOMContentLoaded', () => {
  const botonesMarca = document.querySelectorAll('.filtro-marca-btn');
  const productos = document.querySelectorAll('.producto');

  botonesMarca.forEach(boton => {
    boton.addEventListener('click', () => {
      const marcaSeleccionada = boton.getAttribute('data-marca');

      productos.forEach(producto => {
        if (marcaSeleccionada === 'todos') {
          producto.style.display = 'flex';
        } else {
          if (producto.getAttribute('data-marca') === marcaSeleccionada) {
            producto.style.display = 'flex';
          } else {
            producto.style.display = 'none';
          }
        }
      });
    });
  });
});
