document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const correo = document.getElementById('correo');
  const motivo = document.getElementById('motivo');
  const mensaje = document.getElementById('mensaje');
  const charCount = document.getElementById('charCount');

  function evitarNumeros(event) {
    if (event.key >= '0' && event.key <= '9') {
      event.preventDefault(); 
    }
  }

  function limpiarNumeros(input) {
    input.value = input.value.replace(/[0-9]/g, '');
  }

  nombre.addEventListener('keypress', evitarNumeros);
  apellido.addEventListener('keypress', evitarNumeros);

  nombre.addEventListener('input', () => limpiarNumeros(nombre));
  apellido.addEventListener('input', () => limpiarNumeros(apellido));

  // Validaciones
  function validarCampoVacio(input) {
    if (input.value.trim() === '') {
      input.classList.add('is-invalid');
      return false;
    } else {
      input.classList.remove('is-invalid');
      return true;
    }
  }

  function validarCorreoElectronico(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(input.value.trim())) {
      input.classList.add('is-invalid');
      return false;
    } else {
      input.classList.remove('is-invalid');
      return true;
    }
  }

  nombre.addEventListener('input', () => validarCampoVacio(nombre));
  apellido.addEventListener('input', () => validarCampoVacio(apellido));
  correo.addEventListener('input', () => validarCorreoElectronico(correo));
  motivo.addEventListener('change', () => validarCampoVacio(motivo));
  mensaje.addEventListener('input', () => {
    const length = mensaje.value.length;
    charCount.textContent = `${length} / 250 caracteres`;

    if (length === 0 || length > 250) {
      mensaje.classList.add('is-invalid');
    } else {
      mensaje.classList.remove('is-invalid');
    }
  });

  form.addEventListener('submit', (e) => {
    let isValid = true;
    if (!validarCampoVacio(nombre)) isValid = false;
    if (!validarCampoVacio(apellido)) isValid = false;
    if (!validarCorreoElectronico(correo)) isValid = false;
    if (!validarCampoVacio(motivo)) isValid = false;
    if (mensaje.value.trim() === '' || mensaje.value.length > 250) {
      mensaje.classList.add('is-invalid');
      isValid = false;
    }
    
    if (!isValid) {
      e.preventDefault(); 
    } else {
      alert('Formulario enviado correctamente');
    }
  });
});