document.addEventListener('DOMContentLoaded', () => {
  const boletinForm = document.getElementById('boletinForm');
  const correoBoletin = document.getElementById('correoBoletin');
  const boletinFeedback = document.getElementById('boletinFeedback');

  function mostrarError(mensaje) {
    boletinFeedback.textContent = mensaje;
    boletinFeedback.style.display = 'block';
    correoBoletin.classList.add('esinvalido');
  }

  function quitarError() {
    boletinFeedback.style.display = 'none';
    correoBoletin.classList.remove('esinvalido');
  }

  boletinForm.addEventListener('submit', (e) => {
    const email = correoBoletin.value.trim();
    quitarError();

    if (email === '') {
      mostrarError('Por favor, ingresa tu correo.');
      e.preventDefault();
    } else if (!email.includes('@') || !email.includes('.')) {
      mostrarError('Por favor, ingresa un correo con formato válido.');
      e.preventDefault();
    } else {
      alert('¡Suscripción realizada correctamente!');
    }
  });

  correoBoletin.addEventListener('input', () => {
    quitarError();
  });
});
