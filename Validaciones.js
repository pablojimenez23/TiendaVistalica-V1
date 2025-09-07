document.addEventListener('DOMContentLoaded', () => {
  // Formulario contacto
  const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const correo = document.getElementById('correo');
  const motivo = document.getElementById('motivo');
  const mensaje = document.getElementById('mensaje');
  const charCount = document.getElementById('charCount');

  function mostrarError(input, mensajeError) {
    input.classList.add('esinvalido');
    let feedback = input.nextElementSibling;
    if (feedback && feedback.tagName === 'DIV') {
      feedback.textContent = mensajeError;
      feedback.style.display = 'block';
    }
  }

  function quitarError(input) {
    input.classList.remove('esinvalido');
    let feedback = input.nextElementSibling;
    if (feedback && feedback.tagName === 'DIV') {
      feedback.style.display = 'none';
    }
  }

  function evitarNumeros(event) {
    if (event.key >= '0' && event.key <= '9') {
      event.preventDefault();
    }
  }

  function limpiarNumeros(input) {
    input.value = input.value.replace(/[0-9]/g, '');
  }

  // Eventos contacto
  nombre.addEventListener('keypress', evitarNumeros);
  apellido.addEventListener('keypress', evitarNumeros);

  nombre.addEventListener('input', () => {
    limpiarNumeros(nombre);
    nombre.value.trim() !== '' ? quitarError(nombre) : mostrarError(nombre, 'Por favor, ingresa tu nombre.');
  });

  apellido.addEventListener('input', () => {
    limpiarNumeros(apellido);
    apellido.value.trim() !== '' ? quitarError(apellido) : mostrarError(apellido, 'Por favor, ingresa tu apellido.');
  });

  correo.addEventListener('input', () => {
    if (correo.value.trim() === '') mostrarError(correo, 'El correo es obligatorio.');
    else if (!correo.value.includes('@') || !correo.value.includes('.')) mostrarError(correo, 'El correo debe contener "@" y ".".');
    else quitarError(correo);
  });

  motivo.addEventListener('change', () => {
    motivo.value.trim() === '' ? mostrarError(motivo, 'Por favor, selecciona un motivo.') : quitarError(motivo);
  });

  mensaje.addEventListener('input', () => {
    const length = mensaje.value.length;
    charCount.textContent = `${length} / 250 caracteres`;

    if (length === 0) mostrarError(mensaje, 'Por favor, escribe un mensaje.');
    else if (length > 250) mostrarError(mensaje, 'El mensaje no puede exceder los 250 caracteres.');
    else quitarError(mensaje);
  });

  form.addEventListener('submit', (e) => {
    let esValido = true;

    if (nombre.value.trim() === '') { mostrarError(nombre, 'Por favor, ingresa tu nombre.'); esValido = false; }
    if (apellido.value.trim() === '') { mostrarError(apellido, 'Por favor, ingresa tu apellido.'); esValido = false; }
    if (correo.value.trim() === '') { mostrarError(correo, 'El correo es obligatorio.'); esValido = false; }
    else if (!correo.value.includes('@') || !correo.value.includes('.')) { mostrarError(correo, 'El correo debe contener "@" y ".".'); esValido = false; }
    if (motivo.value.trim() === '') { mostrarError(motivo, 'Por favor, selecciona un motivo.'); esValido = false; }
    if (mensaje.value.trim() === '') { mostrarError(mensaje, 'Por favor, escribe un mensaje.'); esValido = false; }
    else if (mensaje.value.length > 250) { mostrarError(mensaje, 'El mensaje no puede exceder los 250 caracteres.'); esValido = false; }

    if (!esValido) e.preventDefault();
    else alert('Formulario enviado correctamente');
  });
});